import { readFileSync } from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const configPath = path.join(rootDir, "config.yaml");

function countIndent(line) {
    return line.match(/^ */)?.[0].length ?? 0;
}

function stripComment(line) {
    let quote = "";

    for (let index = 0; index < line.length; index += 1) {
        const char = line[index];
        const previous = line[index - 1];

        if ((char === "'" || char === '"') && previous !== "\\") {
            quote = quote === char ? "" : quote || char;
        }

        if (char === "#" && !quote) {
            return line.slice(0, index);
        }
    }

    return line;
}

function splitKeyValue(value) {
    let quote = "";

    for (let index = 0; index < value.length; index += 1) {
        const char = value[index];
        const previous = value[index - 1];

        if ((char === "'" || char === '"') && previous !== "\\") {
            quote = quote === char ? "" : quote || char;
        }

        if (char === ":" && !quote) {
            return [value.slice(0, index).trim(), value.slice(index + 1).trim()];
        }
    }

    return [value.trim(), ""];
}

function parseScalar(value) {
    const trimmed = value.trim();

    if (!trimmed) return "";
    if (trimmed === "true") return true;
    if (trimmed === "false") return false;
    if (trimmed === "null") return null;
    if (/^-?\d+(\.\d+)?$/.test(trimmed)) return Number(trimmed);

    if (
        (trimmed.startsWith("'") && trimmed.endsWith("'"))
        || (trimmed.startsWith('"') && trimmed.endsWith('"'))
    ) {
        return trimmed.slice(1, -1);
    }

    return trimmed;
}

function prepareLines(source) {
    return source
        .split(/\r?\n/)
        .map((line) => stripComment(line).replace(/\s+$/, ""))
        .filter((line) => line.trim().length > 0);
}

function parseBlock(lines, startIndex = 0, indent = 0) {
    const firstLine = lines[startIndex];
    const isArray = firstLine?.slice(indent).startsWith("- ");

    return isArray
        ? parseArray(lines, startIndex, indent)
        : parseObject(lines, startIndex, indent);
}

function parseObject(lines, startIndex, indent) {
    const result = {};
    let index = startIndex;

    while (index < lines.length) {
        const line = lines[index];
        const lineIndent = countIndent(line);

        if (lineIndent < indent) break;
        if (lineIndent > indent) {
            index += 1;
            continue;
        }

        const content = line.slice(indent);
        if (content.startsWith("- ")) break;

        const [key, rawValue] = splitKeyValue(content);

        if (rawValue) {
            result[key] = parseScalar(rawValue);
            index += 1;
            continue;
        }

        const next = parseBlock(lines, index + 1, indent + 2);
        result[key] = next.value;
        index = next.index;
    }

    return { value: result, index };
}

function parseArray(lines, startIndex, indent) {
    const result = [];
    let index = startIndex;

    while (index < lines.length) {
        const line = lines[index];
        const lineIndent = countIndent(line);

        if (lineIndent < indent) break;
        if (lineIndent !== indent || !line.slice(indent).startsWith("- ")) break;

        const content = line.slice(indent + 2).trim();

        if (!content) {
            const next = parseBlock(lines, index + 1, indent + 2);
            result.push(next.value);
            index = next.index;
            continue;
        }

        const [key, rawValue] = splitKeyValue(content);

        if (key && rawValue !== "" && content.includes(":")) {
            const item = { [key]: parseScalar(rawValue) };
            index += 1;

            while (index < lines.length && countIndent(lines[index]) === indent + 2) {
                const [childKey, childValue] = splitKeyValue(lines[index].slice(indent + 2));
                item[childKey] = childValue
                    ? parseScalar(childValue)
                    : parseBlock(lines, index + 1, indent + 4).value;
                index += 1;
            }

            result.push(item);
            continue;
        }

        result.push(parseScalar(content));
        index += 1;
    }

    return { value: result, index };
}

function normalizeBase(base = "/") {
    if (!base || base === "/") return "/";
    const withLeadingSlash = base.startsWith("/") ? base : `/${base}`;
    return withLeadingSlash.endsWith("/") ? withLeadingSlash : `${withLeadingSlash}/`;
}

function normalizeSite(site = "https://tu-dominio.com") {
    return site.endsWith("/") ? site.slice(0, -1) : site;
}

function normalizeConfig(config) {
    return {
        ...config,
        site: {
            ...config.site,
            site: normalizeSite(config.site?.site),
            base: normalizeBase(config.site?.base),
            trailingSlash: Boolean(config.site?.trailingSlash),
        },
        metadata: {
            ...config.metadata,
            openGraph: {
                ...config.metadata?.openGraph,
                images: config.metadata?.openGraph?.images ?? [],
            },
        },
        ui: {
            theme: config.ui?.theme ?? "system",
        },
    };
}

function loadConfig() {
    const source = readFileSync(configPath, "utf8");
    const parsed = parseBlock(prepareLines(source)).value;

    return normalizeConfig(parsed);
}

export const appConfig = loadConfig();

export function withTrailingSlash(pathname, shouldUseTrailingSlash = appConfig.site.trailingSlash) {
    if (!shouldUseTrailingSlash || pathname === "/") return pathname;
    const [pathPart, suffix = ""] = pathname.split(/(?=[?#])/);
    return pathPart.endsWith("/") ? pathname : `${pathPart}/${suffix}`;
}

export function getAbsoluteUrl(pathname = "/", site = appConfig.site.site) {
    if (/^https?:\/\//.test(pathname)) return pathname;

    const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
    return new URL(normalizedPath, `${site}/`).href;
}

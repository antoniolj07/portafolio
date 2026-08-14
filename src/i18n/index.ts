import en from "./locales/en";
import es from "./locales/es";
import { SITE, withTrailingSlash } from "@/config";
import type { Lang, LocaleDictionary, ProjectEntry } from "./types";

export type { Lang } from "./types";

export const DEFAULT_LANG: Lang = "es";
export const SUPPORTED_LANGS: Lang[] = ["es", "en"];

const dictionaries: Record<Lang, LocaleDictionary> = {
    es,
    en,
};

export function getDictionary(lang: Lang = DEFAULT_LANG): LocaleDictionary {
    return dictionaries[lang];
}

export function getLangFromPath(pathname: string): Lang {
    return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
}

export function stripLangFromPath(pathname: string): string {
    const strippedPath = pathname.replace(/^\/en(?=\/|$)/, "");
    return strippedPath === "" ? "/" : strippedPath;
}

export function getLocalizedPath(lang: Lang, path: string): string {
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    const localizedPath = lang === "en"
        ? normalizedPath === "/" ? "/en" : `/en${normalizedPath}`
        : normalizedPath;

    if (!SITE.trailingSlash) {
        return localizedPath;
    }

    if (lang === "en") {
        return withTrailingSlash(localizedPath);
    }

    return withTrailingSlash(localizedPath);
}

export function getAlternateLangPath(pathname: string, targetLang: Lang): string {
    return getLocalizedPath(targetLang, stripLangFromPath(pathname));
}

export function getProjects(lang: Lang): ProjectEntry[] {
    return getDictionary(lang).projects.items;
}

export function getProjectBySlug(lang: Lang, slug: string): ProjectEntry | undefined {
    return getProjects(lang).find((project) => project.slug === slug);
}

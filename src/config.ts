import {
    appConfig,
    getAbsoluteUrl as getConfiguredAbsoluteUrl,
    stripBasePath as stripConfiguredBasePath,
    withBasePath as withConfiguredBasePath,
    withTrailingSlash as withConfiguredTrailingSlash,
} from "../site-config.mjs";

const defaultOgImage = appConfig.metadata.openGraph.images[0];

export const SITE = {
    name: appConfig.site.name,
    website: appConfig.site.site,
    base: appConfig.site.base,
    trailingSlash: appConfig.site.trailingSlash,
    googleSiteVerificationId: appConfig.site.googleSiteVerificationId ?? "",
    ogImage: defaultOgImage?.url ?? "/og-image.webp",
    logo: "logo",
    logoText: "Jorge",
    lang: appConfig.i18n.language,
    textDirection: appConfig.i18n.textDirection,
    favicon: "/favicon.png",
    repository: "",
};

export const METADATA = appConfig.metadata;
export const UI = appConfig.ui;
export const ANALYTICS = appConfig.analytics;
export const APPS = appConfig.apps;
export const I18N_CONFIG = appConfig.i18n;

export const PROFILE = {
    name: "Jorge",
    profileImage: "/img/jorge/Perfil.jpeg",
    contactInfo: {
        email: "",
        linkedin: "",
        resumeDoc: "",
    },
};

export const SOCIALS = [
    {
        name: "LinkedIn",
        url: "",
        icon: "github-fill",
        show: false,
    },
    {
        name: "GitHub",
        url: "",
        icon: "github-fill",
        show: false,
    },
    {
        name: "Instagram",
        url: "",
        icon: "instagram-fill",
        show: false,
    },
];

export function withTrailingSlash(pathname: string) {
    return withConfiguredTrailingSlash(pathname, SITE.trailingSlash);
}

export function withBasePath(pathname = "/") {
    return withConfiguredBasePath(pathname, SITE.base);
}

export function stripBasePath(pathname = "/") {
    return stripConfiguredBasePath(pathname, SITE.base);
}

export function getAbsoluteUrl(pathname = "/") {
    return getConfiguredAbsoluteUrl(pathname, SITE.website, SITE.base);
}

export function getCanonicalUrl(pathname: string) {
    return getAbsoluteUrl(withTrailingSlash(pathname));
}

export function getRobotsContent() {
    const { index, follow } = METADATA.robots;
    return `${index ? "index" : "noindex"},${follow ? "follow" : "nofollow"}`;
}

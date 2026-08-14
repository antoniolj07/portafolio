export type ThemePreference = "system" | "light" | "dark" | "light:only" | "dark:only";

export interface AppConfig {
    site: {
        name: string;
        site: string;
        base: string;
        trailingSlash: boolean;
        googleSiteVerificationId?: string;
    };
    metadata: {
        title: {
            default: string;
            template: string;
        };
        description: string;
        robots: {
            index: boolean;
            follow: boolean;
        };
        openGraph: {
            site_name: string;
            images: Array<{
                url: string;
                width?: number;
                height?: number;
                alt?: string;
            }>;
            type: string;
        };
        twitter: {
            cardType: string;
        };
    };
    i18n: {
        language: string;
        textDirection: string;
    };
    apps: {
        blog: {
            isEnabled: boolean;
        };
    };
    analytics: {
        vendors: {
            googleAnalytics: {
                id: string | null;
            };
        };
    };
    ui: {
        theme: ThemePreference;
    };
}

export const appConfig: AppConfig;
export function withTrailingSlash(pathname: string, shouldUseTrailingSlash?: boolean): string;
export function withBasePath(pathname?: string, base?: string): string;
export function stripBasePath(pathname?: string, base?: string): string;
export function getAbsoluteUrl(pathname?: string, site?: string, base?: string): string;

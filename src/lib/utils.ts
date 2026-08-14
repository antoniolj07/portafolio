import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDatetime = (datetime: any, locale = "es") => {
  const d = new Date(datetime);
  const localeCode = locale === "en" ? "en-US" : "es-GT";
  return d.toLocaleDateString(localeCode, {
    year: 'numeric',
    month: 'short',
  });
};

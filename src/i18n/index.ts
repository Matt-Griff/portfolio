import en from './en';
import fr from './fr';

export const languages = { en: 'English', fr: 'Français' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

const dictionaries = { en, fr };

export function getLang(locale: string | undefined): Lang {
    return locale && locale in dictionaries ? (locale as Lang) : defaultLang;
}

export function useTranslations(locale: string | undefined) {
    return dictionaries[getLang(locale)];
}

/** Prefix a site path with the locale (English has no prefix). `path` must start with "/". */
export function localizePath(path: string, lang: Lang): string {
    return lang === defaultLang ? path : `/${lang}${path === '/' ? '/' : path}`;
}

/** The same page in the other language. */
export function switchLangPath(pathname: string, to: Lang): string {
    const bare = pathname.replace(/^\/fr(?=\/|$)/, '') || '/';
    return localizePath(bare, to);
}

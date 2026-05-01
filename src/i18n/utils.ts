import { ui, defaultLang, showDefaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

function getNestedValue(obj: any, key: string): any {
  return key.split(".").reduce((acc, part) => acc?.[part], obj);
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string): any {
    return (
      getNestedValue(ui[lang], key) ??
      getNestedValue(ui[defaultLang], key) ??
      key
    );
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}

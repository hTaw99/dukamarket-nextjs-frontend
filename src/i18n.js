import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import Cookies from "js-cookie";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    // debug: true,
    lng: Cookies.get("ishop_lang") || "en",
    supportedLngs: ["ar", "en"],
    fallbackLng: "en",
    fallbackNS: "common",
    ns: ["common", "auth", "navbar", "header", "products", "filter"],
    defaultNS: "common",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    detection: {
      order: ["cookie", "htmlTag", "localStorage"],
      caches: ["cookie", "localStorage"],
      lookupCookie: "ishop_lang",
      lookupLocalStorage: "ishop_lang",
    },
  });

export default i18n;

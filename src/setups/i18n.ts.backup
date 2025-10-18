import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(detector)
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: "pt",
    fallbackLng: "en",
    supportedLngs: ["pt", "en", "es"],
    debug: true,
    defaultNS: "global",
    ns: ["counter"],
    backend: {
      loadPath: "locales/{{lng}}/{{ns}}.json",
    },
  });

export default i18n;

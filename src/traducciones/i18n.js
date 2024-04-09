import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: navigator.language || "es",
    fallbackLng: "es",
    debug: false,
    ns: ["translations"],
    defaultNS: "translations",
    backend: {
      loadPath: "/traducciones/{{lng}}/{{ns}}.json",
    },
    react: {
      unsuspense: false,
    },
  });

export default i18n;

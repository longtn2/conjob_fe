import i18n from "i18next";
import viTranslation from '@/locale/vi.json';
import enTranslation from '@/locale/en.json';
import jpTranslation from '@/locale/jp.json';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: enTranslation
  },
  vi: {
    translation: viTranslation
  },
  jp: {
    translation: jpTranslation
  }
}
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "jp",
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;


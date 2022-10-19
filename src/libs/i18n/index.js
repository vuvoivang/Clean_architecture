import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import English from './en/en.json';
import Vietnamese from './vi/vi.json';

const resources = {
  en: {
    translation: English,
  },
  vi: {
    translation: Vietnamese,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'vi',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

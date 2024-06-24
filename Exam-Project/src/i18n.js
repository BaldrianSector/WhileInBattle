import { createI18n } from 'vue-i18n';
import en from './lang/en/en.json';
import da from './lang/da/da.json';

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    da,
  },
});

export default i18n;
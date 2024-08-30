// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation JSON files
import enTranslation from './locales/en/translation.json';
import frTranslation from './locales/fr/translation.json';
import jaTranslation from './locales/ja/translation.json';
import koTranslation from './locales/ko/translation.json';
import hiTranslation from './locales/hi/translation.json'

// Initialize i18n
i18n
  .use(LanguageDetector)  // Detect the user's language
  .use(initReactI18next)  // Pass the i18n instance to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      hi: {
        translation: hiTranslation,
      },
      fr: {
        translation: frTranslation,
      },
      ja: {
        translation: jaTranslation,
      },
      ko: {
        translation: koTranslation,
      },
    },
    lng: 'en',
    fallbackLng: 'en',  // Fallback language if the detected language is not available
    interpolation: {
      escapeValue: false,  // React already escapes values to prevent XSS
    },
  });

export default i18n;

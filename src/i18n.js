import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        username: 'Username',
        phoneNumber: 'Phone Number',
        otp: 'OTP',
        login: 'Login',
        enterDetails: 'Enter your details to continue',
        selectedLanguage: 'Selected Language'
      },
    },
    hi: {
      translation: {
        username: 'उपयोगकर्ता नाम',
        phoneNumber: 'फ़ोन नंबर',
        otp: 'ओटीपी',
        login: 'लॉग इन करें',
        enterDetails: 'जारी रखने के लिए अपना विवरण दर्ज करें',
        selectedLanguage: 'चयनित भाषा'
      },
    },
    te: {
      translation: {
        username: 'వినియోగదారుని పేరు',
        phoneNumber: 'ఫోన్ నంబర్',
        otp: 'ఓటీపీ',
        login: 'లాగిన్',
        enterDetails: 'కొనసాగించేందుకు మీ వివరాలను నమోదు చేయండి',
        selectedLanguage: 'ఎంచుకున్న భాష'
      },
    },
  },
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

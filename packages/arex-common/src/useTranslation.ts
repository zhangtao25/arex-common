import cn from './locales/cn.json';
import en from './locales/en.json';
export const useTranslation = () => {
  return {
    t: (key: string) => {
      // @ts-ignore
      return { en, cn }[window.__locale__ || 'en'][key];
    },
  };
};

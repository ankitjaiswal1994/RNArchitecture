import i18n from 'i18n-js';
import { LocaleString } from 'locales/en';

export const translate = (text: LocaleString, values?: Record<string, any>) => {
  return i18n.t(text || '', values);
};

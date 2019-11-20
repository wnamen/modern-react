import { Translations } from '../constants';

const options = {
  'en-US': 'enUS',
};

export const translate = (locale: string, key: string) => {
  const [p, t] = key.split('.');
  const currentLocale = options[locale || 'en-US'];

  return Translations[currentLocale][p][t];
};

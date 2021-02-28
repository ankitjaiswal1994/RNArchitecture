import { LiteralUnion } from 'typings/utils';

// Do not add a key with single word eg. appname will be app.name

export const en = {
  'app.name': 'RNARCH',
  'login.sub.title': 'Greater Access to Outdoor ',
};

export type LocaleString = keyof typeof en;
export type OptionalLocalString = LiteralUnion<LocaleString, string>;

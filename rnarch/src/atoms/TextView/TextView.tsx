import React, { useMemo, forwardRef } from 'react';
import { createText, ColorProps } from '@shopify/restyle';
import i18n from 'i18n-js';
import { Theme } from 'styles/theme';
import { LocaleString } from 'locales/en';

export const TextBase = createText<Theme>();

export type TextProps = React.ComponentPropsWithRef<typeof TextBase> &
  ColorProps<Theme> & {
    localeId?: LocaleString;
    ref?: any;
    values?: Record<string, string>;
  };

export const TextView = forwardRef<typeof TextBase, TextProps>(
  ({ localeId, children, values, ...props }, ref) => {
    const textToBeDisplayed = useMemo(() => {
      if (localeId) {
        return i18n.t(localeId || '', values);
      } else {
        return children || null;
      }
    }, [localeId, children, values]);
    const fontFamily = props.fontFamily ? 'Roboto-Regular' : undefined;
    return (
      <TextBase fontFamily={fontFamily} ref={ref as any} {...props}>
        {textToBeDisplayed}
      </TextBase>
    );
  },
);

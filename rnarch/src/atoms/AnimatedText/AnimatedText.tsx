/* eslint-disable no-param-reassign */
import React, { useMemo, forwardRef, ReactElement } from 'react';
import {
  TextProps as RNTextProps,
  Animated,
  Text as RNText,
} from 'react-native';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components/native';
import css from '@styled-system/css';

import {
  color,
  layout,
  grid,
  space,
  PositionProps,
  position,
  background,
  ColorProps,
  border,
  shadow,
  LayoutProps,
  SpaceProps,
  GridProps,
  BackgroundProps,
  BorderProps,
  typography,
  TypographyProps,
  flexbox,
  FlexboxProps,
  ShadowProps,
  variant,
} from 'styled-system';
import { isLocale } from 'typings/locale';
import { LocaleString } from '../../locales';

const availableVariants = {
  h1: '',
  h2: '',
  h2bold: '',
  h3: '',
  h3bold: '',
  emptystate: '',
  stats: '',
  body: '',
  spaced: '',
  'body-small': '',
  h4bold: '',
  h5bold: '',
  'button-large': '',
  label: '',
  placeholder: '',
  profile_header: '',
};
type Variant = keyof typeof availableVariants;

type TextTransform = 'uppercase' | 'lowercase' | 'capitalize';
type TextDecorationLine = 'underline';
export interface TextBaseProps
  extends RNTextProps,
    ColorProps,
    LayoutProps,
    SpaceProps,
    GridProps,
    PositionProps,
    BorderProps,
    BackgroundProps,
    TypographyProps,
    FlexboxProps,
    ShadowProps {
  ref?: any;
  color?: string;
  /**
   * Used to add some css, you it will also be compatible with the theme.
   */
  id?: LocaleString;
  children?: React.ReactNode;
  values?: Record<string, string | number>;
  variant?: Variant;
  textTransform?: TextTransform;
  textDecorationLine?: TextDecorationLine;
}

const variants = Object.keys(availableVariants).reduce((a, currentValue) => {
  a[currentValue] = {
    fontSize: currentValue,
    lineHeight: currentValue,
    letterSpacing: currentValue,
    fontFamily: currentValue,
  };
  return a;
}, {});
export const TextBase = styled(Animated.Text)<TextBaseProps>`
${variant({
  variants,
})}
${({ textTransform }) => textTransform && css({ textTransform })}
${({ textDecorationLine }) => textDecorationLine && css({ textDecorationLine })}
${space}
${color}
${layout}
${background}
${position}
${grid}
${border}
${typography}
${flexbox}
${shadow}
`;

export type TextProps = { renderChildren?: boolean } & TextBaseProps;
/**
 *
 * @param id - A localised id which translates to a string (should be used when we want to show a predefined filed.)
 * @param variant determines which variant to dispay.
 */
export const AnimatedText = forwardRef<ReactElement | HTMLElement, TextProps>(
  ({ id, children, values, renderChildren, ...props }, textRef) => {
    const isLocalText = useMemo(() => isLocale(children), [children]);
    if (id || isLocalText) {
      return (
        <FormattedMessage id={id || (children as string)} values={values}>
          {text => (
            <TextBase {...props} ref={textRef}>
              {text}
              {renderChildren === true ? children || null : null}
            </TextBase>
          )}
        </FormattedMessage>
      );
    }
    return (
      <TextBase {...props} ref={textRef}>
        {children || null}
      </TextBase>
    );
  },
);
AnimatedText.defaultProps = {
  id: undefined,
};

AnimatedText.displayName = 'Text';

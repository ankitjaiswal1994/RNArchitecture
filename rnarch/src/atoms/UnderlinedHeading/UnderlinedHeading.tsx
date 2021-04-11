import React, { FC } from 'react';
import { LocaleString } from 'locales';
import { Falsy } from 'react-native';
import { Text, TextProps } from '../Text';
import { Box, BoxProps } from '../Box';

type NonLocalised = {
  color?: string;
  lineColor?: string;
  text: string;
  underline?: boolean;
  locale?: Falsy;
  containerProps?: BoxProps;
  heading_color?: string;
};
type Localised = {
  color?: string;
  lineColor?: string;
  text: LocaleString;
  underline?: boolean;
  locale: true;
  containerProps?: BoxProps;
  heading_color?: string;
};

export type UnderlinedHeadingProps = NonLocalised | Localised;

export const UnderlinedHeading: FC<UnderlinedHeadingProps & TextProps> = ({
  lineColor,
  heading_color,
  color,
  text,
  underline,
  containerProps,
  locale,
  ...props
}) => {
  return (
    <Box {...containerProps}>
      <Text
        id={locale === true ? (text as LocaleString) : undefined}
        variant="h3bold"
        color={heading_color || color}
        fontSize="9px"
        textTransform="uppercase"
        {...props}>
        {text}
      </Text>
      {underline === true ? (
        <Box
          width="40px"
          height="2px"
          backgroundColor={lineColor || color}
          mt="12px"
        />
      ) : null}
    </Box>
  );
};
UnderlinedHeading.defaultProps = {
  color: 'goldtext.100',
  underline: true,
};
UnderlinedHeading.displayName = 'UnderlinedHeading';

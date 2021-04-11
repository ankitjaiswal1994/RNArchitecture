import React, { FC, useMemo, useCallback, useRef, useEffect } from 'react';
import styled from 'styled-components/native';
import { Box, BoxProps } from 'atoms/Box';
import { Touch } from 'atoms/Touch';
import { TextInputProps as RNTextInputProps, Animated } from 'react-native';
import {
  color,
  variant,
  layout,
  grid,
  space,
  PositionProps,
  position,
  background,
  ColorProps,
  border,
  shadow,
  TypographyProps,
  LayoutProps,
  SpaceProps,
  BackgroundProps,
  BorderProps,
  typography,
  flexbox,
  FlexboxProps,
  ShadowProps,
} from 'styled-system';
import { LiteralUnion } from 'typings/utils';
import { LocaleString } from 'locales';
import { isLocale } from 'typings/locale';
import { useIntl } from 'react-intl';
import { Label } from 'atoms/Label/Label';
import { Icon } from 'atoms/Icon';
import { showErrorMessage } from 'utils/popup';

type TextInputVariant = 'slim' | 'normal' | 'normal-error';

type TextInputBaseProps = {
  variant?: TextInputVariant;
} & RNTextInputProps &
  LayoutProps &
  SpaceProps &
  PositionProps &
  BorderProps &
  BackgroundProps &
  FlexboxProps &
  ShadowProps &
  ColorProps &
  TypographyProps;
const TextInputBase = styled.TextInput<TextInputBaseProps>`
  ${variant({
    variants: {
      slim: {
        borderColor: 'grey.20',
        alignSelf: 'center',
        fontFamily: 'body',
        width: '100%',
        maxWidth: '400px',
        fontSize: 'body',
        borderWidth: 0.5,
        borderRadius: 20,
        padding: '6px',
        paddingLeft: '15px',
        justifyContent: 'center',
      },
      normal: {
        height: '34px',
        borderColor: 'grey.20',
        alignSelf: 'center',
        fontFamily: 'body',
        width: '100%',
        maxWidth: '400px',
        fontSize: 'body',
        borderWidth: 0.5,
        borderRadius: 20,
        padding: '6px',
        paddingLeft: '15px',
        justifyContent: 'center',
      },
      'normal-error': {
        height: '34px',
        borderColor: 'error.100',
        alignSelf: 'center',
        fontFamily: 'body',
        width: '100%',
        maxWidth: '400px',
        fontSize: 'body',
        borderWidth: 0.5,
        borderRadius: 20,
        padding: '6px',
        paddingLeft: '15px',
        justifyContent: 'center',
      },
    },
  })}
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
export type TextInputProps = {
  placeholder?: LiteralUnion<LocaleString, string>;
  label?: LiteralUnion<LocaleString, string>;
  error?: LiteralUnion<LocaleString, string> | false;
  containerProps?: BoxProps;
} & TextInputBaseProps;
export const TextInput: FC<TextInputProps> = ({
  placeholder,
  label,
  containerProps,
  variant: internalVareiant,
  error,
  ...props
}) => {
  const animation = useRef(new Animated.Value(0));

  const locale = isLocale(placeholder);
  const intl = useIntl();
  const internalPlaceholder = useMemo(() => {
    if (locale === true) {
      return intl.formatMessage({ id: placeholder });
    }
    return placeholder;
  }, [placeholder, intl, locale]);

  const handleInfoPress = useCallback(() => {
    showErrorMessage(error || 'Unkown Error');
  }, [error]);

  useEffect(() => {
    if (error) {
      Animated.timing(animation.current, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animation.current, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [error]);

  const translateY = animation.current.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0],
  });

  const infoAnimationStyle = {
    transform: [
      {
        translateY,
      },
    ],
  };
  return (
    <Box width="100%" {...containerProps}>
      {label ? (
        <Label mb="9px" color="grey.100">
          {label}
        </Label>
      ) : null}
      <Box width="100%" overflow="hidden">
        <Touch
          zIndex={1}
          onPress={handleInfoPress}
          position="absolute"
          right="10px"
          height="100%"
          alignItems="center"
          justifyContent="center">
          <Animated.View style={infoAnimationStyle}>
            <Icon name="info" size={18} color="error.100" right="5px" />
          </Animated.View>
        </Touch>

        <TextInputBase
          placeholder={internalPlaceholder}
          variant={
            error
              ? (`${internalVareiant}-error` as TextInputVariant)
              : internalVareiant
          }
          {...props}
        />
      </Box>
    </Box>
  );
};
TextInput.defaultProps = {
  variant: 'slim',
};

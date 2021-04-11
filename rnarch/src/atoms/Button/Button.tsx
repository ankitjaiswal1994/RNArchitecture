import React, { FC } from 'react';
import styled from 'styled-components/native';
import {
  color,
  layout,
  space,
  position,
  background,
  border,
  shadow,
  typography,
  flexbox,
  SpaceProps,
  ColorProps,
  LayoutProps,
  BackgroundProps,
  PositionProps,
  BorderProps,
  FlexboxProps,
  TypographyProps,
  ShadowProps,
  variant,
} from 'styled-system';
import { TouchableOpacityProps } from 'react-native';
import { Text } from 'atoms/Text';

type ButtonVariant = 'slim' | 'normal' | 'primary';
type ButtonBaseProps = {
  color?: string;
} & TouchableOpacityProps &
  SpaceProps &
  ColorProps &
  LayoutProps &
  BackgroundProps &
  PositionProps &
  BorderProps &
  TypographyProps &
  FlexboxProps &
  ShadowProps;
const ButtonBase = styled.TouchableOpacity<ButtonBaseProps>`
${variant({
  variants: {
    slim: {
      height: 30,
      borderRadius: 'full',
      width: '100%',
      borderColor: 'primarytext.100',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    normal: {
      height: 40,
      borderRadius: 'full',
      width: '100%',
      borderColor: 'primarytext.100',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    primary: {
      height: 48,
      borderRadius: 'full',
      width: '100%',
      backgroundColor: 'primary.100',
    },
  },
})}

${space}
${color}
${layout}
${background}
${position}
${border}
${typography}
${flexbox}
${shadow}`;

export type ButtonProps = {
  variant?: ButtonVariant;
  title?: string;
} & ButtonBaseProps;
export const Button: FC<ButtonProps> = React.memo(
  ({ children, title, ...props }) => {
    const { color: colorProp } = props;
    return (
      <ButtonBase {...props}>
        {title ? (
          <Text
            variant="h4bold"
            textTransform="uppercase"
            color={colorProp || 'primarytext.100'}>
            {title}
          </Text>
        ) : null}
        {children}
      </ButtonBase>
    );
  },
);
Button.defaultProps = {
  variant: 'slim',
};

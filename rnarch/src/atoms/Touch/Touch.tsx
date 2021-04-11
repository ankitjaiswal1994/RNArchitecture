import styled from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';
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
  LayoutProps,
  SpaceProps,
  BackgroundProps,
  BorderProps,
  typography,
  flexbox,
  FlexboxProps,
  ShadowProps,
} from 'styled-system';

export type Variant = 'absolute-center';
export type TouchProps = {
  ref?: any;
  color?: string;
  as?: any;
  children?: React.ReactNode;
  variant?: Variant;
} & TouchableOpacityProps &
  ColorProps &
  LayoutProps &
  SpaceProps &
  PositionProps &
  BorderProps &
  BackgroundProps &
  FlexboxProps &
  ShadowProps;
export const Touch = styled.TouchableOpacity<TouchProps>`
position: relative;
${variant({
  variants: {
    'absolute-center': {
      position: 'absolute',
      height: '100%',
      zIndex: 2,
      width: '100%',
      alignItems: 'center',
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

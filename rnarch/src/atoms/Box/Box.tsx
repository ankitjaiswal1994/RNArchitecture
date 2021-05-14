import styled from 'styled-components/native';
import { ViewProps } from 'react-native';
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
import styledCss, { SystemCssProperties } from '@styled-system/css';
import { Merge } from 'typings/utils';

export type Variant = 'absolute-center';
export type InternalBoxProps = {
  ref?: any;
  color?: string;
  as?: any;
  children?: React.ReactNode;
  onPress?(...args: any): void | Function;
  variant?: Variant;
  css?: SystemCssProperties | any;
};

type StyledType = ViewProps &
  ColorProps &
  LayoutProps &
  SpaceProps &
  PositionProps &
  BorderProps &
  BackgroundProps &
  FlexboxProps &
  ShadowProps;

export type BoxProps = Merge<StyledType, InternalBoxProps>;

export const Box = styled.View<BoxProps>`
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
  ${({ css }) => css && styledCss(css)}
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

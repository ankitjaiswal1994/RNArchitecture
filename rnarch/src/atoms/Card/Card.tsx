import React, { FC } from 'react';
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
  variant,
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
import { TouchableOpacityProps } from 'react-native';
import { Icon, IconProps } from 'atoms/Icon';

type CardBaseProps = {
  variant?: 'no-shadow';
} & TouchableOpacityProps &
  ColorProps &
  LayoutProps &
  SpaceProps &
  PositionProps &
  BorderProps &
  BackgroundProps &
  FlexboxProps &
  ShadowProps;

const CardBase = styled.TouchableOpacity<any>`
  shadow-opacity: 0.2;
  shadow-offset: 0px 2px;
  elevation: 3;
  shadow-color: ${props => props.theme.colors.purple[100]};
  width: ${props => props.width || props?.theme?.sizes?.['mx-card'] || '92%'};
  max-width: 600px;
  align-self: center
    ${css({
      borderRadius: 'card',
      backgroundColor: 'white',
      borderColor: 'darkgrey.120',
    })};
     ${variant({
       variants: {
         'no-shadow': {
           shadowOpacity: 0,
           elevation: 0,
           shadowOffset: '0px 0px',
           shadowColor: 'transparent',
         },
       },
     })};
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

export type CardInternalProps = React.FunctionComponent<CardBaseProps> & {
  Sperator: typeof Sperator; // add this
  InfoIcon: typeof InfoIcon;
};
export type CardProps = CardBaseProps;
/**
 *
 * @param children
 * A primitive Card Component which displays all of it's children
 */
export const Card: CardInternalProps = ({ children, ...props }) => {
  return (
    <CardBase activeOpacity={1} {...props}>
      {children}
    </CardBase>
  );
};
type Sperator = {
  opacity?: number;
};
export const Sperator = styled.View<Sperator>`
  opacity: ${props => props.opacity || 0.2};
  ${css({
    height: '1px',
    backgroundColor: 'grey.80',
    marginTop: 6,
    marginBottom: 6,
  })};
`;
const InfoIcon: FC<Partial<IconProps>> = props => {
  return (
    <Icon
      top={2}
      p="2px"
      px="3px"
      right={2}
      position="absolute"
      zIndex={2}
      name="info"
      size={20}
      color="grey.50"
      {...props}
    />
  );
};
Card.defaultProps = {};
Card.displayName = 'Card';
Card.Sperator = Sperator;
Card.InfoIcon = InfoIcon;

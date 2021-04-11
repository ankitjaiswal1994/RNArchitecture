import React, { FC } from 'react';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import styled from 'styled-components/native';
import { TextProps } from 'react-native';
import {
  color,
  layout,
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
  variant,
  TypographyProps,
} from 'styled-system';
import { useColor } from 'hooks/useColor';
import { LiteralUnion } from 'typings/utils';
import fontelloConfig from '../../../assets/config.json';

const CustomIcon = createIconSetFromFontello(fontelloConfig);

type IconName = LiteralUnion<
  | 'attention'
  | 'calender'
  | 'left-open-big'
  | 'right-open-big'
  | 'right-open'
  | 'rupee'
  | 'calendar'
  | 'quotation-marks'
  | 'ok'
  | 'info'
  | 'warning'
  | 'directions'
  | 'notification'
  | 'checked-circular'
  | 'play'
  | 'play-round'
  | 'cross'
  | 'heart'
  | 'alarm'
  | 'up-open-mini'
  | 'down-open-mini'
  | 'clock'
  | 'heart-filled'
  | 'tick'
  | 'heart-1'
  | 'ic-audio'
  | 'ic_right_arrow'
  | 'youtube-play'
  | 'calendar-add'
  | 'calendar-remove'
  | 'check-circle'
  | 'circle'
  | 'list'
  | 'pray'
  | 'ic_time'
  | 'chevron'
  | 'audio-1'
  | 'clock'
  | 'user'
  | 'donow'
  | 'chat'
  | 'phone'
  | 'eye-off'
  | 'eye'
  | 'apple'
  | 'heart-outline'
  | 'info-1'
  | 'lock'
  | 'facebook-circled'
  | 'facebook'
  | 'left-open'
  | 'x-circle'
  | 'tick-1'
  | 'radio'
  | 'help-circle'
  | 'headphones'
  | 'flag'
  | 'clock-hollow'
  | 'mail'
  | 'icon_settings'
  | 'camera'
  | 'ic_info'
  | 'icon_edit'
  | 'message-square'
  | 'left-open-1'
  | 'right-open-1'
  | 'bar-chart'
  | 'reminder'
  | 'music'
  | 'clock'
  | 'chevron-down'
  | 'three-dot-menu'
  | 'donow_reminder'
  | 'donow_reminders'
  | 'green-tick'
  | 'green-tick-small'
  | 'arrrow-up'
  | 'angle-up'
  | 'rotate-cw'
  | 'log-out'
  | 'red-warning'
  | 'icon_calendar'
  | 'icon_copy'
  | 'long-arrow-right'
  | 'icon_language',
  string
>;
type Variant = 'rounded';
export type IconProps = {
  color?: string;
  variant?: Variant;
  onPress?(e: any): void;
  // size?: number;
  name: IconName;
} & TextProps &
  ColorProps &
  LayoutProps &
  SpaceProps &
  PositionProps &
  TypographyProps &
  BorderProps &
  BackgroundProps &
  FlexboxProps &
  ShadowProps;

export const StyledCustomIcon = styled(CustomIcon)<IconProps>`
  position: relative;
  text-align: center;
  overflow: hidden;
    ${props =>
      variant({
        variants: {
          rounded: {
            borderRadius: props.size ? props.size / 2 : 12,
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
    ${shadow};
`;

export const Icon: FC<IconProps> = ({
  name,
  color: colorFromProps,
  size,
  ...props
}) => {
  const internalColor = useColor(colorFromProps || 'primary.100');
  return (
    <StyledCustomIcon
      name={name}
      color={internalColor}
      size={size as any}
      {...props}
    />
  );
};
Icon.defaultProps = {
  size: 25,
  color: 'primary.100',
};
Icon.displayName = 'Icon';

/* eslint-disable global-require */
import React, { FC, useMemo } from 'react';
import { Image, ImageProps } from 'atoms/Image/Image';
import { Merge } from 'typings/utils';
import { useColor } from 'hooks/useColor';

const DEFAULT_SIZE = 13;
const ICONS = {
  calendar: require('../../images/calender.png'),
  referral: require('../../images/refer_illustration.png'),
  warning: require('../../images/warning.png'),
  google: require('../../../assets/images/google_icon.png'),
  reminderNotSelected: require('../../images/reminder_new.png'),
  reminderSelected: require('../../images/reminder_solid.png'),
  trackReminderNotSelected: require('../../images/icon_a_reminder.png'),
  trackReminderSelected: require('../../images/reminder-filled_1.png'),
  trackfavoriteNotSelected: require('../../images/donow_heart.png'),
  trackfavoriteSelected: require('../../images/favourite.png'),
  favoriteNotSelected: require('../../images/heart_purple.png'),
  favoriteSelected: require('../../images/favourite.png'),
  share: require('../../images/share_white.png'),
  headphones: require('../../images/headphones.png'),
  smart_tv: require('../../images/smart_tv.png'),
  talkToCoach: require('../../images/talkToCoach.png'),
  alertSuccess: require('../../images/alert-success.png'),
  tick_icon_filled: require('../../images/tick-icon-filled.png'),
  warningRed: require('../../images/warning-red.png'),
  mindhouseGraphic: require('../../images/mindhouse_graphic.png'),
  categoryCardGraphic: require('../../images/category__card_logo.png'),
  helpCircle: require('../../images/help-circle.png'),
  infoCircle: require('../../images/info-circle.png'),
  logout: require('../../images/log-out.png'),
  rotatecw: require('../../images/rotate-cw.png'),
  zoomLogo: require('../../images/zoomLogo.png'),
  coachLogo: require('../../images/coachLogo.png'),
  circleBackground: require('../../images/circle_background.png'),
};
type ImageIconInternalProps =
  | {
      name?: keyof typeof ICONS;
      source?: any;
      size?: number | string;
      tintColor?: string;
      asImage?: boolean;
      passTintColor?: boolean;
    }
  | {
      name: keyof typeof ICONS;
      source?: any;
      size?: number | string;
      tintColor?: string;
      asImage?: boolean;
      passTintColor?: boolean;
    };

type ImageIconProps = Merge<ImageProps, ImageIconInternalProps>;
export const ImageIcon: FC<ImageIconProps> = ({
  name,
  size,
  source,
  tintColor,
  passTintColor,
  ...props
}) => {
  const internalTintColorColor = useColor(tintColor || 'primary.100');
  const isNameVaild = useMemo(() => ICONS[name as any], [name]);
  const additionalProps = {
    height: size,
    width: size,
  };

  return (
    <Image
      source={isNameVaild || source}
      {...additionalProps}
      tintColor={passTintColor ? internalTintColorColor : undefined}
      {...props}
    />
  );
};
ImageIcon.defaultProps = {
  size: DEFAULT_SIZE,
  passTintColor: true,
};

ImageIcon.displayName = 'ImageIcon';

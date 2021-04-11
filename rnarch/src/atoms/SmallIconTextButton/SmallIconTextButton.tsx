import React, { FC } from 'react';
import { Touch } from 'atoms/Touch';
import { Text } from 'atoms/Text';
import { Icon, IconProps } from 'atoms/Icon';
import { LiteralUnion } from 'typings/utils';
import { LocaleString } from 'locales';
import { PressEvent } from 'typings/events';

type SmallIconTextButton = {
  title?: LiteralUnion<LocaleString, string>;
  onPress?: PressEvent;
  align?: 'left' | 'right';
  iconName?: IconProps['name'];
};
export const SmallIconTextButton: FC<SmallIconTextButton> = ({
  align,
  title,
  onPress,
  iconName,
}) => {
  return (
    <Touch flexDirection="row" alignItems="center" onPress={onPress}>
      {align === 'left' ? (
        <Icon
          name={iconName || 'right-open-big'}
          color="primarytext.100"
          size={12}
        />
      ) : null}
      <Text color="primarytext.100" variant="h3" letterSpacing={0}>
        {title}
      </Text>
      {align === 'right' ? (
        <Icon
          name={iconName || 'right-open-big'}
          color="primarytext.100"
          size={11}
        />
      ) : null}
    </Touch>
  );
};
SmallIconTextButton.defaultProps = {
  align: 'right',
  title: 'View More',
};

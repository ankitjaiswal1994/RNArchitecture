import React, { FC } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Touch } from 'atoms/Touch';
import { Icon, IconProps } from 'atoms/Icon';
import NavigationService from 'utils/navigation/NavigationService';
import { LiteralUnion } from 'typings/utils';
import { LocaleString } from 'locales';
import { Text } from 'atoms/Text';

type BackButtonProps = {
  text?: LiteralUnion<LocaleString, string>;
  icon?: IconProps['name'];
  iconColor?: string;
  iconSize?: number;
};
export const BackButton: FC<BackButtonProps> = ({
  text,
  iconSize,
  icon,
  iconColor,
}) => {
  return (
    <SafeAreaView>
      <Touch onPress={NavigationService.goBack}>
        <Icon
          ml="24px"
          mt="20px"
          mr="10px"
          name={icon || 'left-open'}
          color={iconColor}
          size={iconSize || 30}
        />
      </Touch>
      {text ? (
        <Text
          mt="5px"
          variant="h1bold"
          color="primarytext.100"
          alignSelf="center">
          {text}
        </Text>
      ) : null}
    </SafeAreaView>
  );
};

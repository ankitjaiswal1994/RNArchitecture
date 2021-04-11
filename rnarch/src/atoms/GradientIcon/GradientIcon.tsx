import React, { FC } from 'react';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import { Icon, IconProps } from 'atoms/Icon';

type GradientIconProps = {
  startColor?: string;
  endColor?: string;
} & IconProps;
export const GradientIcon: FC<GradientIconProps> = ({
  startColor = '#4568dc',
  endColor = '#b06ab3',
  ...props
}) => {
  return (
    <MaskedView maskElement={<Icon {...props} />}>
      <LinearGradient colors={[startColor, endColor]}>
        <Icon {...props} opacity={0} />
      </LinearGradient>
    </MaskedView>
  );
};
GradientIcon.defaultProps = {
  startColor: '#4568dc',
  endColor: '#b06ab3',
};

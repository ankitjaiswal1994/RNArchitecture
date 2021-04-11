import React, { FC } from 'react';
import { Text, TextProps } from 'atoms/Text';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';

type GradientTextProps = {
  startColor?: string;
  endColor?: string;
} & TextProps;
export const GradientText: FC<GradientTextProps> = ({
  startColor = '#4568dc',
  endColor = '#b06ab3',
  ...props
}) => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient colors={[startColor, endColor]}>
        <Text {...props} opacity={0} />
      </LinearGradient>
    </MaskedView>
  );
};
GradientText.defaultProps = {
  startColor: '#4568dc',
  endColor: '#b06ab3',
};

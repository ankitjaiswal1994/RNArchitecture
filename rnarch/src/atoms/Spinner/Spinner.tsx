import React, { FC } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { useColor } from 'hooks/useColor';
import { Merge } from 'typings/utils';

type SpinnerProps = Merge<
  typeof ActivityIndicator,
  {
    size?: 'small' | 'large' | number;
    color?: string;
    style?: any;
  }
>;
export const Spinner: FC<SpinnerProps> = ({ size, color, ...props }) => {
  const internalColor = useColor(color || 'primary.100');
  return (
    <ActivityIndicator animating size={size} color={internalColor} {...props} />
  );
};
Spinner.defaultProps = {
  color: 'primary.100',
  size: 'small',
};

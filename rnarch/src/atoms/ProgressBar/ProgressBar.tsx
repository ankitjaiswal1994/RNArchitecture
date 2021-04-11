import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { ProgressBar as RNProgressBar } from 'react-native-paper';
import { useColor } from 'hooks/useColor';

type ProgressBarProps = {
  color?: string;
  height?: number;
  backgroundColor?: string;
  progress?: number;
};
export const ProgressBar: FC<ProgressBarProps> = ({
  progress,
  height,
  backgroundColor,
  color,
}) => {
  const internalColor = useColor(color || 'primary.100');
  return (
    <RNProgressBar
      progress={progress}
      color={internalColor}
      style={(styles.container, { height, backgroundColor })}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(92, 92, 110, 0.2)',
    borderRadius: 2,
  },
});

ProgressBar.defaultProps = {
  height: 5,
  backgroundColor: 'rgba(92, 92, 110, 0.2)',
};

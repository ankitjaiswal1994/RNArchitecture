import { useColor } from 'hooks/useColor';
import React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

type FabIcon = 'plus';

export type FabProps = {
  icon?: FabIcon;
  onPress?: () => void;
};
export const Fab = ({ icon, onPress }: FabProps) => {
  const backgroundColor = useColor('primary');
  return (
    <FAB
      color="white"
      style={[styles.fab, { backgroundColor }]}
      icon={icon || 'plus'}
      onPress={onPress}
    />
  );
};
const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 16,
    zIndex: 10,
    elevation: 5,
  },
});

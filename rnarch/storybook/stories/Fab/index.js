import React from 'react';
import PropTypes from 'prop-types';
import { FAB } from 'react-native-paper';

export default function Fab({ onPress, style, icon }) {
  return <FAB onPress={onPress} style={style} icon={icon} />;
}

Fab.defaultProps = {
  onPress: () => {},
  style: {},
  icon: {},
};

Fab.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};

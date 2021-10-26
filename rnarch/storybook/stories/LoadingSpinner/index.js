import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native-paper';

export default function Spinner({ color, size }) {
  return <ActivityIndicator color={color} size={size} />;
}

Spinner.defaultProps = {
  color: '#00cc99',
  size: '30',
};

Spinner.propTypes = {
  children: PropTypes.node,
};

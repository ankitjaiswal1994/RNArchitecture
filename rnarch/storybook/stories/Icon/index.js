import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

export default function Icon({ width, height }) {
  return <View height={height} width={width} />;
}

Icon.defaultProps = {
  height: {},
  width: {},
};

Icon.propTypes = {
  children: PropTypes.node,
};

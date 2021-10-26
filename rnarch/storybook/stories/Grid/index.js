import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

export default function Grid({ onPress, style, children }) {
  return <View onPress={onPress} style={style} />;
}

Grid.defaultProps = {
  //   children: null,
  style: {},
  onPress: () => {},
};

Grid.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};

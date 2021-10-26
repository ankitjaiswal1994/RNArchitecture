import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';

export default function Datepicker({ onPress, style }) {
  return (
    <TouchableHighlight onPress={onPress} style={style}></TouchableHighlight>
  );
}

Datepicker.defaultProps = {
  onPress: () => {},
  style: {},
};

Datepicker.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};

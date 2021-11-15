import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'react-native-paper';

export default function CheckBox({ onPress, checked, color }) {
  return <Checkbox onPress={onPress} status={checked} color={color}></Checkbox>;
}

CheckBox.defaultProps = {
  color: '#00e68a',
  checked: {},
  onPress: () => {},
};

CheckBox.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};

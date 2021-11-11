import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-native-paper';

export default function Toggle({ value, style, onValueChange }) {
  return (
    <Switch style={style} onValueChange={onValueChange} value={value}></Switch>
  );
}

Toggle.defaultProps = {
  children: null,
  onValueChange: {},
  value: {},
};

Toggle.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};

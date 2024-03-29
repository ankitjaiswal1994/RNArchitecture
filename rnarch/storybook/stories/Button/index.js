import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';

export default function Button({ onPress, children, style }) {
  return (
    <TouchableHighlight onPress={onPress} style={style}>
      {children}
    </TouchableHighlight>
  );
}

Button.defaultProps = {
  children: null,
  onPress: () => {},
  style: {},
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};

import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';

export default function TextInput({
  children,
  onPress,
  placeholder,
  onChange,
}) {
  return (
    <TouchableHighlight onPress={onPress} onChange={onChange}>
      {children}
    </TouchableHighlight>
  );
}

TextInput.defaultProps = {
  children: null,
  onPress: () => {},
};

TextInput.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};

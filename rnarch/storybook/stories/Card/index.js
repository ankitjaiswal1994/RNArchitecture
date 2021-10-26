import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';

export default function Card({ children, style, onPress }) {
  return (
    <TouchableHighlight style={style} onPress={onPress}>
      {children}
    </TouchableHighlight>
  );
}

Card.defaultProps = {
  children: null,
  onPress: () => {},
  style: {},
};

Card.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};

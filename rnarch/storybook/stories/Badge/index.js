import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'react-native-paper';

export default function Badges({ onPress, style, size, children }) {
  return (
    <Badge onPress={onPress} style={style} size={size}>
      {children}
    </Badge>
  );
}

Badges.defaultProps = {
  onPress: () => {},
  style: {},
  size: {},
  children: {},
};

Badges.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};

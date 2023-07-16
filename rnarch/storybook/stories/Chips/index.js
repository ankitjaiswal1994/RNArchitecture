import React from 'react';
import PropTypes from 'prop-types';
import { Chip } from 'react-native-paper';

export default function Chips({ onPress, icon, children }) {
  return (
    <Chip onPress={onPress} icon={icon}>
      {children}
    </Chip>
  );
}

Chips.defaultProps = {
  children: null,
  icon: {},
  onPress: () => {},
};

Chips.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};

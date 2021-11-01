import React from 'react';
import PropTypes from 'prop-types';
import { Snackbar } from 'react-native-paper';

export default function SnackBar({
  children,
  style,
  onPress,
  visible,
  action,
}) {
  return (
    <Snackbar style={style} onPress={onPress} visible={visible} action={action}>
      {children}
    </Snackbar>
  );
}

SnackBar.defaultProps = {
  children: null,
  onPress: () => {},
  style: {},
  visible: {},
  action: {},
};

SnackBar.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};

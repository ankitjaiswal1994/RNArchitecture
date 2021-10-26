import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-native';

export default function CenteredModal({ children, style }) {
  return (
    <Modal
      visible={true}
      // onRequestClose={onBackdropPress}
      // style={style}
    >
      {children}
    </Modal>
  );
}

CenteredModal.defaultProps = {
  children: null,
  // style: {},
  // visible,
  // onRequestClose: { onBackdropPress },
};

CenteredModal.propTypes = {
  children: PropTypes.node,
  // onPress: PropTypes.func,
};

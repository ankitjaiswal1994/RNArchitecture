import React from 'react';
import PropTypes from 'prop-types';
import { RadioButton } from 'react-native-paper';

export default function Radio({ onPress, style, status }) {
  return <RadioButton onPress={onPress} style={style} status={status} />;
}

Radio.defaultProps = {
  //   children: null,
  onPress: () => {},
  style: {},
  status: {},
};

Radio.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};

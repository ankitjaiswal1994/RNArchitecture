import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar, Colors } from 'react-native-paper';

export default function Progressbar({ progress, color }) {
  return <ProgressBar progress={progress} color={color} />;
}

Progressbar.defaultProps = {
  progress: {},
  color: {},
};

Progressbar.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};

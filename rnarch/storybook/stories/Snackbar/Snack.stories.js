import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { action } from '@storybook/addon-actions';
import SnackBar from './index.js';
import CenterView from '../CenterView';

storiesOf('SnackBar', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <SnackBar
      visible={true}
      action={{
        label: 'Undo',
      }}
      onPress={action('clicked-Snackbar')}>
      Hey there! I'm a Snackbar.
    </SnackBar>
  ));

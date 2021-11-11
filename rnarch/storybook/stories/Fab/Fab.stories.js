import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import Fab from './index.js';

storiesOf('Fab', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default ', () => (
    <Fab
      style={{ position: 'absolute', margin: 16, right: 0, bottom: 0 }}
      small
      icon="plus"
      onPress={action('clicked-Fab')}
    />
  ));

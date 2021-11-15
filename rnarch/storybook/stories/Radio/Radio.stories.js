import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Radio from './index.js';
import CenterView from '../CenterView';

storiesOf('Radio', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Outline ', () => (
    <Radio
      onPress={action('clicked-radio')}
      status="checked"
      color={'#003300'}
    />
  ));

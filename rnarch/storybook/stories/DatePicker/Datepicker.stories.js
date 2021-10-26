import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import DateTimePicker from '.';
import CenterView from '../CenterView';

storiesOf('Datepicker', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('basic', () => (
    <DateTimePicker onPress={action('onPress')} visible={true}></DateTimePicker>
  ));

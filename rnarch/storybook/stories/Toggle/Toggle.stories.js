import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Toggle from './index.js';
import CenterView from '../CenterView';

storiesOf('Toggle', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('check', () => <Toggle value="true" onValueChange="false" />);

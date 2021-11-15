import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import Spinner from '.';

storiesOf('Spinner', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('basic', () => <Spinner color="#61ce70" size="large" />);

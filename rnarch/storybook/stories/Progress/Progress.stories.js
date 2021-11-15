import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Progressbar from './index.js';
import CenterView from '../CenterView';
import { View } from 'react-native';

storiesOf('Progressbar', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Basic ', () => (
    <View
      style={{
        height: 300,
        width: 300,
        justifyContent: 'center',
      }}>
      <Progressbar progress={0.5} color={'#000099'} />
    </View>
  ));

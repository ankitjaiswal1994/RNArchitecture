import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import { View } from 'react-native';
import Grid from '.';

storiesOf('Grid', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Basic', () => (
    <View
      style={{
        height: '100%',
        width: '100%',
        justifyContent: 'space-evenly',
      }}>
      <Grid
        style={{
          height: '30%',
          width: '100%',
          backgroundColor: '#993300',
        }}></Grid>
      <Grid
        style={{
          height: '30%',
          width: '100%',
          backgroundColor: '#6699ff',
        }}></Grid>
    </View>
  ));

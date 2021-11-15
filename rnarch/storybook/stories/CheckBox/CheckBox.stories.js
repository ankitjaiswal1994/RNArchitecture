import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text, View } from 'react-native';
import CheckBox from '.';
import CenterView from '../CenterView';

storiesOf('CheckBox', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Checked', () => (
    <View
      style={{
        height: '5%',
        width: '10%',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#a3c2c2',
        backgroundColor: '#00e68a',
      }}>
      <CheckBox
        onPress={action('onPress')}
        checked="checked"
        color={'#ffffff'}
      />
    </View>
  ))
  .add('Disabled', () => (
    <View
      style={{
        height: '5%',
        width: '10%',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#c2d6d6',
        backgroundColor: '#c2d6d6',
      }}>
      <CheckBox
        onPress={action('onPress')}
        checked="checked"
        color={'#c2d6d6'}
        disabled={true}
      />
    </View>
  ));

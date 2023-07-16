import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Chips from '.';
import CenterView from '../CenterView';
import { View, Text } from 'react-native';

storiesOf('Chips', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Checked', () => (
    <View style={{ backgroundColor: '#ff99cc' }}>
      <Chips icon="plus" onPress={action('onPress')} mode="outlined">
        <Text>hi</Text>
      </Chips>
    </View>
  ));

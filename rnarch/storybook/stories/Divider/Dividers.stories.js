import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import { Divider, Text } from 'react-native-paper';
import { View } from 'react-native';

storiesOf('Dividers', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Basic', () => (
    <View style={{ height: 200, width: 200, backgroundColor: '#b3ccff' }}>
      <Text>Lemon</Text>
      <Divider width="90%" />
      <Text>Mango</Text>
      <Divider />
    </View>
  ));

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text, Image, View } from 'react-native';
import Card from './index.js';
import CenterView from '../CenterView';

storiesOf('Card', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('low-variant', () => (
    <Card
      onPress={action('onPress')}
      style={{
        shadowColor: 'zBlack',
        borderColor: ' #ffffff ',
        height: 50,
        width: 360,
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        shadowOffset: { width: 0, height: 1 },
        elevation: 3,
        backgroundColor: '#ffffff',
      }}>
      <Text>Basic Card</Text>
    </Card>
  ))
  .add('high-variant', () => (
    <Card
      onPress={action('onPress')}
      style={{
        shadowColor: 'zBlack',
        borderColor: ' #ffffff ',
        height: 50,
        width: 360,
        backgroundColor: '#ffffff',
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        shadowOffset: { width: 0, height: 3 },
        elevation: 7,
      }}>
      <Text> Card</Text>
    </Card>
  ))
  .add('Toast-Success ', () => (
    <Card
      onPress={action('onPress')}
      style={{
        borderTopWidth: 8,
        borderTopColor: '#4ca65b',
        backgroundColor: '#05294a',
        borderLeftWidth: 0,
        height: 80,
        width: '90%',
      }}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: 'white' }}>
          Lorem ipsum dolor sit amet. Rem esse saepe vel libero voluptatum ea
          quam velit sed eaque aperiam ex optio dolorem qui mollitia deleniti
          est magnam voluptatem.
        </Text>
      </View>
    </Card>
  ))
  .add('Toast-Error ', () => (
    <Card
      onPress={action('onPress')}
      style={{
        borderTopWidth: 8,
        borderTopColor: '#d95502',
        backgroundColor: '#05294a',
        borderLeftWidth: 0,
        height: 80,
        width: '90%',
      }}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: 'white' }}>
          Lorem ipsum dolor sit amet. Rem esse saepe vel libero voluptatum ea
          quam velit sed eaque aperiam ex optio dolorem qui mollitia deleniti
          est magnam voluptatem.
        </Text>
      </View>
    </Card>
  ))

  .add('Toast-Info ', () => (
    <Card
      onPress={action('onPress')}
      style={{
        borderTopWidth: 8,
        borderTopColor: '#87cefa',
        backgroundColor: '#05294a',
        borderLeftWidth: 0,
        height: 80,
        width: '90%',
      }}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: 'white' }}>
          Lorem ipsum dolor sit amet. Rem esse saepe vel libero voluptatum ea
          quam velit sed eaque aperiam ex optio dolorem qui mollitia deleniti
          est magnam voluptatem.
        </Text>
      </View>
    </Card>
  ))
  .add('Toast-Info ', () => (
    <Card
      onPress={action('onPress')}
      style={{
        borderTopWidth: 8,
        borderTopColor: '#87cefa',
        backgroundColor: '#05294a',
        borderLeftWidth: 0,
        height: 80,
        width: '90%',
      }}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: 'white' }}>
          Lorem ipsum dolor sit amet. Rem esse saepe vel libero voluptatum ea
          quam velit sed eaque aperiam ex optio dolorem qui mollitia deleniti
          est magnam voluptatem.
        </Text>
      </View>
    </Card>
  ))
  .add('Toast-Info ', () => (
    <Card
      onPress={action('onPress')}
      style={{
        borderTopWidth: 8,
        borderTopColor: '#87cefa',
        backgroundColor: '#05294a',
        borderLeftWidth: 0,
        height: 80,
        width: '90%',
      }}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: 'white' }}>
          Lorem ipsum dolor sit amet. Rem esse saepe vel libero voluptatum ea
          quam velit sed eaque aperiam ex optio dolorem qui mollitia deleniti
          est magnam voluptatem.
        </Text>
      </View>
    </Card>
  ))
  .add('Toast-Warn ', () => (
    <Card
      onPress={action('onPress')}
      style={{
        borderTopWidth: 8,
        borderTopColor: '#f7c220',
        backgroundColor: '#05294a',
        borderLeftWidth: 0,
        height: 80,
        width: '90%',
      }}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: 'white' }}>
          Lorem ipsum dolor sit amet. Rem esse saepe vel libero voluptatum ea
          quam velit sed eaque aperiam ex optio dolorem qui mollitia deleniti
          est magnam voluptatem.
        </Text>
      </View>
    </Card>
  ));

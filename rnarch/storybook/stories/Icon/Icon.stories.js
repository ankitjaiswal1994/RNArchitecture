import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Image } from 'react-native';
import Icon from './index.js';
import CenterView from '../CenterView';
import { View } from 'react-native';

storiesOf('Icon', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  // .add('with an image', () => (
  //   <Image
  //     source={require('../../../src/assets/images/error.png')}
  //     width={100}
  //     height={100}
  //     style={{
  //       position: 'absolute',
  //       left: 0,
  //     }}
  //   />
  // ))
  .add('Info', () => (
    <Image
      source={require('../../../src/assets/images/info.png')}
      width={40}
      height={20}
      marginBottom={40}
      position="absolute"
      right={0}
    />
  ))
  .add('success', () => (
    <Image
      source={require('../../../src/assets/images/success.png')}
      width={20}
      height={30}
    />
  ))
  .add(' warn', () => (
    <Image
      source={require('../../../src/assets/images/warn.png')}
      width={30}
      height={40}
    />
  ));

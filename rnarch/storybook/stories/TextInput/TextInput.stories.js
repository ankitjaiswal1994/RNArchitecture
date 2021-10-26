import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import { TextInput as RNTextInput } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Text, Form } from 'react-native';
storiesOf('TextInput', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Basic', () => (
    <RNTextInput
      onPress={action('onPress')}
      placeholder="Type Email"
      style={{
        borderWidth: 1,
        borderColor: '#33ccff',
        height: 40,
        borderWidth: 1,
        width: '90%',
      }}></RNTextInput>
  ))
  .add('Disabled', () => (
    <RNTextInput
      onPress={action('onPress')}
      editable="false"
      style={{
        borderWidth: 1,
        borderColor: '#e0ebeb',
        height: 40,
        borderWidth: 1,
        width: '90%',
      }}></RNTextInput>
  ))
  .add('SearchInput', () => <Searchbar placeholder="Search" />)
  .add('Floating', () => (
    <>
      <RNTextInput
        onPress={action('onPress')}
        placeholder="Type Text"
        style={{
          borderWidth: 1,
          borderColor: '#e0ebeb',
          height: 40,
          borderWidth: 1,
          width: '90%',
          backgroundColor: '#ffffff',
        }}></RNTextInput>
      <Text style={{ color: '#ff0000', marginRight: 235 }}>
        Test is required
      </Text>
    </>
  ))
  .add('Helper', () => (
    <>
      <RNTextInput
        onPress={action('onPress')}
        placeholder="Type Text"
        style={{
          borderWidth: 1,
          borderColor: '#e0ebeb',
          height: 40,
          borderWidth: 1,
          width: '90%',
          backgroundColor: '#ffffff',
        }}></RNTextInput>
      <Text style={{ color: '#8c8c8c', marginRight: 100 }}>
        Password is more than 8 characters
      </Text>
    </>
  ));

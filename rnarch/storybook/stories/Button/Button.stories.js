import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Button from '.';
import CenterView from '../CenterView';

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Underline-text', () => (
    <Button
      onPress={action('clicked-text')}
      style={{
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          textDecorationLine: 'underline',
          color: '#61ce70',
          fontSize: 20,
        }}>
        {text('Button text', 'SignUp')}
      </Text>
    </Button>
  ))
  .add('filled button', () => (
    <Button
      title="account.confirmation.title"
      onPress={action('onclick')}
      style={{
        width: '90%',
        height: 50,
        paddingHorizontal: '15%',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#33ce9b',
      }}>
      <Text style={{ color: '#fff', fontSize: 20 }}>
        {text('Button text', 'Filled Button')}
      </Text>
    </Button>
  ))
  .add('Outline button', () => (
    <Button
      title="account.confirmation.title"
      onPress={action('onclick')}
      style={{
        width: '80%',
        height: 50,
        paddingHorizontal: '5%',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#23a455',
      }}>
      <Text style={{ color: '#23a455' }}>
        {text('Button text', 'Outline Button')}
      </Text>
    </Button>
  ));

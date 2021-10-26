import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import CenteredModal from '.';
import { View, Text, Button } from 'react-native';

storiesOf('CenteredModal', module)
  // .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('basic', () => (
    <View
      style={{
        backgroundColor: '#0099cc',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
      }}>
      <Button title="button" onPress={action('onPress')} />
      <CenteredModal animationType="slide" visible={true}>
        <View
          style={{
            marginTop: 20,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 35,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}>
          <Text>Modal open</Text>
        </View>
      </CenteredModal>
    </View>
  ));

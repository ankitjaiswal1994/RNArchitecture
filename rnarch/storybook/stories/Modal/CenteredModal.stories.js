import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import useState from 'storybook-addon-state';
import { View, Button, Text, Modal } from 'react-native';

storiesOf('CenteredModal', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('controlled', () => {
    const [open, close] = useState('hi', false);
    return (
      <View>
        <Button title="Openmodal" onPress={() => close(!open)} />
        <Modal visible={open}>
          <View
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              marginTop: '40%',
              height: '30%',
              width: '60%',
              backgroundColor: '#ff6666',
            }}>
            <Text style={{ color: '#ffffff', textAlign: 'center' }}>
              Modal is open
            </Text>
            <Button title="Close" onPress={() => close(!open)}></Button>
          </View>
        </Modal>
      </View>
    );
  });

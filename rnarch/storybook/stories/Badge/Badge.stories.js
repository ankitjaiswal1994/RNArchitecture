import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import Badges from '.';

storiesOf('Badge', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Badge without content  ', () => (
    <Badges size={30} onPress={action('clicked-badge')}>
      15
    </Badges>
  ));

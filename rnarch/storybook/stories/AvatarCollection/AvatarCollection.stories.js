import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import { Avatar } from 'react-native-paper';

storiesOf('AvatarCollection', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Basic', () => <Avatar.Icon size={100} icon="folder" />);

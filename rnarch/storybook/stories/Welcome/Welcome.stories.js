import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react-native';
import Welcome from '.';

storiesOf('Text-field', module).add('Text', () => (
  <Welcome showApp={linkTo('Button')} />
));

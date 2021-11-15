import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import { List } from 'react-native-paper';

storiesOf('Accordion', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <List.Section title="Accordion">
      <List.Accordion
        style={{ width: 300, backgroundColor: '#b3ffe0' }}
        title="A header">
        <List.Item title="First" />
        <List.Item title="Second" />
      </List.Accordion>
      <List.Accordion
        style={{ width: 300, backgroundColor: '#b3ffe0' }}
        title="Another header">
        <List.Item title=" First " />
        <List.Item title="Second" />
      </List.Accordion>
    </List.Section>
  ));

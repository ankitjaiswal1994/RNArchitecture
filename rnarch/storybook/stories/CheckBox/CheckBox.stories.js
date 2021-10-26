import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text, View } from 'react-native';
import CheckBox from '.';
import CenterView from '../CenterView';

storiesOf('CheckBox', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Checked', () => (
    <View
      style={{
        height: '5%',
        width: '10%',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#a3c2c2',
        backgroundColor: '#00e68a',
      }}>
      <CheckBox
        onPress={action('onPress')}
        checked="checked"
        color={'#ffffff'}
      />
    </View>
  ))
  .add('Disabled', () => (
    <View
      style={{
        height: '5%',
        width: '10%',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#c2d6d6',
        backgroundColor: '#c2d6d6',
      }}>
      <CheckBox
        onPress={action('onPress')}
        checked="checked"
        color={'#c2d6d6'}
        disabled={true}
      />
    </View>
  ));
// () => (
//   2  <form>
//   3    <Checkbox id="Unchecked" label="Cats" hideLabel onChange={onChange} />
//   4    <Checkbox id="Checked" label="Cats" hideLabel checked onChange={onChange} />
//   5    <Checkbox
//   6      id="With-label-and-error"
//   7      label="Cats"
//   8      onChange={onChange}
//   9      error="There's a snake in my boots"
//   10    />
//   11    <Checkbox id="With-label" label="Cats" onChange={onChange} />
//   12    <Checkbox
//   13      appearance="secondary"
//   14      id="With-label"
//   15      label="Secondary"
//   16      checked
//   17      onChange={onChange}
//   18    />
//   19    <Checkbox appearance="secondary" id="With-label" label="Secondary" onChange={onChange} />
//   20  </form>
//   21)
//   13      appearance="secondary"
//   13      appearance="secondary"
//   14      id="With-label"
//   15      label="Secondary"
//   16      checked
//   17      onChange={onChange}
//   18    />
//   19    <Checkbox appearance="secondary" id="With-label" label="Secondary" onChange={onChange} />
//   20  </form>
//   21)

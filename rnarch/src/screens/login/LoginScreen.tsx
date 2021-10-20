import React from 'react';
import { Text } from 'atoms/Text';
import { Box } from 'atoms/Box';
import { TextInput } from 'atoms/TextInput';
import { Button } from '/Users/srishtimaurya/Documents/Crownstack/training /architecture/practise/rnarch/src/molecules/Button/Button.tsx';
import { StyleSheet } from 'react-native';
export const LoginScreen = () => {
  return (
    <Box style={styles.container}>
      <Text style={styles.label}>Username</Text>
      <TextInput />
      <Text style={styles.label}>Password</Text>
      <TextInput />
      <Button title="login.btn" variant="primary" />
      <Box style={styles.mb} />
      <Button title="forget.btn" variant="secondary" />
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 25,
  },
  mb: {
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

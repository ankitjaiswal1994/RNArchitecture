import React from 'react';
import { Text } from 'atoms/Text';
import { Box } from 'atoms/Box';
import { TextInput } from 'atoms/TextInput';
import { Button } from '../../molecules/Button/Button';

export const LoginScreen = () => {
  return (
    // style={styles.container}
    <Box width="90%" alignSelf="center" mt="xl">
      <Text localeId="text.username" variant="bold" mb="s" />
      <TextInput />
      <Text localeId="text.password" variant="bold" mb="s" />
      <TextInput />
      <Button title="login.btn" variant="primary" />
      <Box mb="s" />
      <Button title="forget.btn" variant="secondary" />
    </Box>
  );
};

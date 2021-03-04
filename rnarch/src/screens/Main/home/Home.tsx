import React from 'react';
import { Box } from 'atoms/Box';
import { TextView } from 'atoms/TextView';
import { useAuth } from 'context/Authentication';
import { Icon } from 'atoms/Icon';

export const Home = () => {
  const {
    actions: { changeLanguage },
  } = useAuth();
  return (
    <Box m="xxxl" height={1000} bg="primary">
      <TextView
        style={{ fontSize: 50 }}
        text="app.name"
        fontFamily="DancingScript-Regular"
        onPress={() => changeLanguage()}
      />
      <TextView fontFamily="DancingScript-Bold" style={{ fontSize: 20 }}>
        Read the docs to discover what to do next:
      </TextView>
      <Icon name="home" size={30} />
    </Box>
  );
};

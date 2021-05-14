import React from 'react';
import { Box } from 'atoms/Box';
import { TextView } from 'atoms/TextView';
import { useAuth } from 'context/Authentication';

export const Home = () => {
  const {
    actions: { changeLanguage },
  } = useAuth();
  return (
    <Box m="xxxl" height={100} bg="primary">
      <TextView
        variant="largeBody"
        text="app.name"
        renderChildren
        onPress={() => changeLanguage()}>
        <TextView variant="largeBody" onPress={() => changeLanguage()}>
          s
        </TextView>
      </TextView>
      <TextView>Read the docs to discover what to do next:</TextView>
    </Box>
  );
};

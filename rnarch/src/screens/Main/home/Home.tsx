import React from 'react';
import { Box } from 'atoms/Box';
import { TextView } from 'atoms/TextView';

export const Home = () => {
  return (
    <Box m="xxxl" height={100} bg="primary">
      <TextView style={{ fontSize: 50 }} variant="regular">
        QWERTY qwerty
      </TextView>
      <TextView>Read the docs to discover what to do next:</TextView>
    </Box>
  );
};

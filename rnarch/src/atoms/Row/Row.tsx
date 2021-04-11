import React, { FC } from 'react';
import { BoxProps, Box } from 'atoms/Box';

export const Row: FC<BoxProps> = ({ children, ...props }) => (
  <Box flexDirection="row" {...props}>
    {children}
  </Box>
);

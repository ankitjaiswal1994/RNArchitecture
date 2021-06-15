import React, { FC } from "react";

import { Box, BoxProps } from "atoms/Box";

export const Row: FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <Box flexDirection="row" {...rest}>
      {children}
    </Box>
  );
};

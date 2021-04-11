import React, { FC } from 'react';
import { Box, BoxProps } from 'atoms/Box';
import { Text } from 'atoms/Text';

type CardRibbon = {
  color?: string;
  text: string;
} & BoxProps;
export const CardRibbon: FC<CardRibbon> = ({ color, text, ...props }) => {
  return (
    <Box
      height="26px"
      width="100%"
      borderTopLeftRadius="card"
      borderTopRightRadius="card"
      alignItems="center"
      justifyContent="center"
      backgroundColor={color || 'primary.100'}
      {...props}>
      <Text color="white" variant="h5bold">
        {text}
      </Text>
    </Box>
  );
};

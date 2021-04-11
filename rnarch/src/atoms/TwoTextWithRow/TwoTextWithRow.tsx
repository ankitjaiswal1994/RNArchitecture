import React from 'react';
import { Text } from 'atoms/Text';
import { Box } from 'atoms/Box';

type TwoTextWithRowProps = {
  title: string;
  description: string;
};

export const TwoTextWithRow = ({ title, description }: TwoTextWithRowProps) => {
  return (
    <Box alignItems="center" width="120px">
      <Text color="darkgrey.70" variant="h5bold" letterSpacing={1.2}>
        {title}
      </Text>
      <Text
        mt="6px"
        color="primary.100"
        variant="button-large"
        letterSpacing={0}
        lineHeight={21}>
        {description}
      </Text>
    </Box>
  );
};

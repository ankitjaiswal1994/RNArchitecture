import React, { FC } from 'react';
import { Box } from 'atoms/Box';
import { Text } from 'atoms/Text';

type DismissedCardProps = {
  text?: string;
};
export const DismissedCard: FC<DismissedCardProps> = ({ text }) => {
  return (
    <Box
      borderRadius="card"
      borderColor="grey.100"
      borderWidth={0.5}
      alignItems="center"
      width="91%"
      alignSelf="center"
      px="12px"
      py="16px"
      justifyContent="center">
      <Text
        variant="body"
        textAlign="center"
        color="grey.100"
        fontSize="12px"
        lineHeight="18px">
        {text}
      </Text>
    </Box>
  );
};

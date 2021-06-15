import { Box, BoxProps } from "atoms/Box";
import { Text } from "atoms/Text";
import React from "react";

export type TagProps = {
  text: string;
} & BoxProps;

export const Tag = ({ text, ...props }: TagProps) => {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      px="s"
      py="xxs"
      borderRadius={100}
      backgroundColor="lightPrimary"
      {...props}>
      <Text variant="regular" fontSize={12} color="primary" numberOfLines={1}>
        {text}
      </Text>
    </Box>
  );
};

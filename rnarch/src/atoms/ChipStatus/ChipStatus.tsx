import React from "react";
import { Box, BoxProps } from "atoms/Box";
import { Text } from "atoms/Text";
import { useColor } from "hooks/useColor";

export type ChipStausProps = {
  text: string;
  color: string;
} & BoxProps;
export const ChipStatus = ({ text, color, ...props }: ChipStausProps) => {
  const internalColor = useColor(color || "primary");
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      px="s"
      py="xxs"
      borderRadius={100}
      style={{ backgroundColor: internalColor ? internalColor : "#cf3232" }}
      maxWidth={165}
      {...props}>
      <Text
        variant="regular"
        textTransform="capitalize"
        fontSize={10}
        color="darkText">
        {text}
      </Text>
    </Box>
  );
};

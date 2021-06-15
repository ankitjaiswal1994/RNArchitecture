import React, { FC, useCallback } from "react";
import { Box, BoxProps } from "atoms/Box";
import { BaseButton } from "react-native-gesture-handler";

export type SelectableCardProps = {
  selected?: boolean;
  onPress?: (selected?: boolean) => void;
} & BoxProps;
export const SelectableCard: FC<SelectableCardProps> = ({
  children,
  selected,
  onPress,
  ...props
}) => {
  const handlePress = useCallback(() => {
    if (typeof onPress === "function") {
      onPress(selected);
    }
  }, [onPress, selected]);

  let additionalBoxProps: BoxProps = {
    borderWidth: 2,
    borderColor: "transparent",
  };
  if (selected) {
    additionalBoxProps = {
      borderWidth: 2,
      borderColor: "primary",
    };
  }

  return (
    <BaseButton onPress={handlePress}>
      <Box
        width="100%"
        minHeight={110}
        p="mll"
        backgroundColor="lightPrimary"
        borderRadius={20}
        {...additionalBoxProps}
        {...props}>
        {children}
      </Box>
    </BaseButton>
  );
};

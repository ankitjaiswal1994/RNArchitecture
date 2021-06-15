import React, { FC } from "react";
import { createBox, ColorProps } from "@shopify/restyle";
import { Theme } from "styles/theme";
import { TouchableOpacityProps, TouchableOpacity } from "react-native";

export const TouchBase = createBox<Theme, TouchableOpacityProps>(
  TouchableOpacity,
);
export type TouchProps = React.ComponentProps<typeof TouchBase> &
  ColorProps<Theme>;

export const Touch: FC<TouchProps> = ({ children, ...props }) => {
  return <TouchBase {...props}>{children}</TouchBase>;
};

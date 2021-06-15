import React from "react";
import { ActivityIndicator } from "react-native-paper";
import {
  BorderProps,
  BackgroundColorProps,
  ColorProps,
  SpacingProps,
  useRestyle,
  spacing,
  border,
  backgroundColor,
  PositionProps,
  position,
} from "@shopify/restyle";
import { Theme } from "styles/theme";
import { useColor } from "hooks/useColor";

type SpinnerProps = React.ComponentProps<typeof ActivityIndicator> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  PositionProps<Theme> &
  ColorProps<Theme> &
  SpacingProps<Theme> & {
    color: string;
  };

const restyleFunctions = [spacing, border, position, backgroundColor];

export const Spinner = ({ color, size, ...rest }: SpinnerProps) => {
  const props = useRestyle(restyleFunctions as any, {
    ...rest,
  });
  const internalColor = useColor(color || "primary");
  return <ActivityIndicator color={internalColor} size={size} {...props} />;
};

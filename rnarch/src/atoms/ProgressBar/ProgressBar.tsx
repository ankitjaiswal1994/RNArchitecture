import React from "react";
import { ColorProps, border, BorderProps, useRestyle } from "@shopify/restyle";
import { ProgressBar } from "react-native-paper";
import { Theme } from "styles/theme";
import { useColor } from "hooks/useColor";

type ProgressBarProps = React.ComponentProps<typeof ProgressBar> &
  BorderProps<Theme> &
  ColorProps<Theme> & {
    progress: number;
    color: string;
  };

const restyleFunctions = [border];

export const ProgressBarBase = ({
  progress,
  color,
  ...rest
}: ProgressBarProps) => {
  const props = useRestyle(restyleFunctions as any, {
    ...rest,
  });
  const internalColor = useColor(color || "primary");

  return <ProgressBar progress={progress} color={internalColor} {...props} />;
};

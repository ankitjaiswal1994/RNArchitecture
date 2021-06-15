import React, { FC } from "react";
import { createBox, ColorProps } from "@shopify/restyle";
import { Theme } from "styles/theme";
import {
  ImageBackground as RNImage,
  ImageBackgroundProps as RNImageProps,
} from "react-native";

export const ImageBase = createBox<Theme, RNImageProps>(RNImage);
type ImageProps = React.ComponentProps<typeof ImageBase> & ColorProps<Theme>;

export const ImageBackground: FC<ImageProps> = ({ ...props }) => {
  return <ImageBase {...props} />;
};

import React, { FC } from "react";
import { createBox, ColorProps } from "@shopify/restyle";
import { Theme } from "styles/theme";
import { Image as RNImage, ImageProps as RNImageProps } from "react-native";

export const ImageBase = createBox<Theme, RNImageProps>(RNImage);
export type ImageProps = React.ComponentProps<typeof ImageBase> &
  ColorProps<Theme>;

export const Image: FC<ImageProps> = ({ ...props }) => {
  return <ImageBase {...props} />;
};

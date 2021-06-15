/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useTheme } from "@shopify/restyle";
import theme, { Theme } from "styles/theme";
import { LiteralUnion } from "typings/utils";

type Color = LiteralUnion<keyof typeof theme.colors, string>;
export const useColor = (color: Color) => {
  const internalTheme = useTheme<Theme>();
  // @ts-ignore
  return internalTheme.colors[color] || color;
};

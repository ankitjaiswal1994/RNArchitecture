import React, { forwardRef, useMemo } from "react";
import {
  ColorProps,
  useRestyle,
  spacing,
  border,
  backgroundColor,
  BorderProps,
  BackgroundColorProps,
  createVariant,
  VariantProps,
  SpacingProps,
  TypographyProps,
  LayoutProps,
  layout,
} from "@shopify/restyle";
import { Theme } from "styles/theme";
import { RectButton as RNButton } from "react-native-gesture-handler";
import { useColor } from "hooks/useColor";
import { Box } from "atoms/Box";
import { LocaleString } from "locales/en";
import { Spinner } from "atoms/Spinner";
import { ButtonText } from "./atoms/ButtonText";

export type ButtonProps = React.ComponentPropsWithRef<typeof RNButton> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  ColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  TypographyProps<Theme> &
  VariantProps<Theme, "buttonVariants"> & {
    title: LocaleString;
    loading?: boolean;
  };

const buttonVariant = createVariant<Theme>({
  themeKey: "buttonVariants",
});
const restyleFunctions = [
  spacing,
  border,
  backgroundColor,
  layout,
  buttonVariant,
];
export const Button = forwardRef<RNButton, ButtonProps>(
  ({ title, onPress, loading, variant: internalVariant, ...rest }, ref) => {
    const props = useRestyle(restyleFunctions as any, {
      ...rest,
      variant: internalVariant,
    });
    const whiteColor = useColor("whiteText");
    const primaryColor = useColor("primary");
    const styles = useMemo(
      () => ({
        backgroundColor:
          internalVariant === "primary" ? primaryColor : whiteColor,
        borderRadius: 4,
      }),
      [internalVariant, whiteColor, primaryColor],
    );
    return (
      <RNButton
        onPress={loading ? undefined : onPress}
        ref={ref}
        style={styles}>
        <Box
          width="100%"
          borderWidth={2}
          borderColor="primary"
          {...(props as any)}>
          {loading ? (
            <Spinner color="whiteText" />
          ) : (
            <ButtonText variant={internalVariant} localeId={title} />
          )}
        </Box>
      </RNButton>
    );
  },
);
Button.defaultProps = {
  variant: "primary",
};

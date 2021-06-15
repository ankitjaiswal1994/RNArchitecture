import { Box } from "atoms/Box";
import { Text } from "atoms/Text";
import { LocaleString } from "locales/en";
import React from "react";
import { useSafeArea } from "react-native-safe-area-context";

type FloatingBackButtonProps = {
  title?: LocaleString;
};

export const FloatingSuccessButton = ({ title }: FloatingBackButtonProps) => {
  const { top } = useSafeArea();
  return (
    <Box position="absolute" zIndex={99} top={top} width="100%">
      {title ? (
        <Box position="absolute" alignSelf="center" top={20}>
          <Text variant="headline" color="whiteText" localeId={title} />
        </Box>
      ) : (
        <Box />
      )}
    </Box>
  );
};

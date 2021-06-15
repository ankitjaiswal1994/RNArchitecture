import React from "react";
import { Box } from "atoms/Box";
import { useSafeArea } from "react-native-safe-area-context";
import { LocaleString } from "locales/en";
import { Text } from "atoms/Text";
import { Row } from "atoms/Row";

type ProfileFloatingButtonProps = {
  onPress?: () => void;
  title?: LocaleString;
  renderRight?: React.ReactNode;
  renderLeft?: React.ReactNode;
};

export const ProfileFloatingButton = ({
  title,
  renderRight,
  renderLeft,
}: ProfileFloatingButtonProps) => {
  const { top } = useSafeArea();
  return (
    <Box
      position="absolute"
      zIndex={99}
      top={top}
      width="100%"
      justifyContent="center">
      {title ? (
        <Box position="absolute" alignSelf="center" top={20}>
          <Text variant="headline" color="whiteText" localeId={title} />
        </Box>
      ) : (
        <Box />
      )}
      <Row pr="l" justifyContent="space-between" alignItems="center" top={15}>
        {renderLeft || <Box />}
        {renderRight || <Box />}
      </Row>
    </Box>
  );
};

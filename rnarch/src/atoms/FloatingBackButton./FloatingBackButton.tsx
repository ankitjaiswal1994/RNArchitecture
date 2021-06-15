import React from "react";
import { Box } from "atoms/Box";
import { useSafeArea } from "react-native-safe-area-context";
import { goBack } from "services/NavigationService";
import { Icon } from "atoms/Icon";
import { LocaleString } from "locales/en";
import { Text } from "atoms/Text";
import { Row } from "atoms/Row";

type FloatingBackButtonProps = {
  onPress?: () => void;
  title?: LocaleString;
  renderRight?: React.ReactNode;
  showback?: boolean;
};

export const FloatingBackButton = ({
  onPress,
  title,
  renderRight,
}: FloatingBackButtonProps) => {
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
      <Row pr="l" justifyContent="space-between" alignItems="center">
        <Icon
          name="back"
          size={17}
          color="whiteText"
          p="l"
          onPress={onPress || goBack}
        />

        {renderRight || <Box />}
      </Row>
    </Box>
  );
};

import React from "react";
import { Box } from "atoms/Box";
import { useSafeArea } from "react-native-safe-area-context";
import { Icon } from "atoms/Icon";
import { Row } from "atoms/Row";
import { Text } from "atoms/Text";
import { useColor } from "hooks/useColor";

type ModalCancelButtonProps = {
  dismissModel: () => void;
  title?: string;
  renderRight?: React.ReactNode;
  iconColor?: string;
};

export const ModalCancelButton = ({
  dismissModel,
  title,
  renderRight,
  iconColor,
}: ModalCancelButtonProps) => {
  const { top } = useSafeArea();
  const internalColor = useColor(iconColor || "whiteText");
  return (
    <Box position="absolute" zIndex={99} top={top} width="100%">
      {title ? (
        <Box width="65%" position="absolute" alignSelf="center" top={20}>
          <Text
            textAlign="center"
            ellipsizeMode="middle"
            numberOfLines={1}
            variant="headline"
            color="whiteText">
            {title}
          </Text>
        </Box>
      ) : (
        <Box />
      )}
      <Row pr="l" justifyContent="space-between" alignItems="center">
        <Icon
          name="cancel"
          size={17}
          color={internalColor ? internalColor : "whiteText"}
          p="l"
          onPress={dismissModel}
        />
        {renderRight || <Box />}
      </Row>
    </Box>
  );
};

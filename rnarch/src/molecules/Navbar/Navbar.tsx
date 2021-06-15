import { Box, BoxProps } from "atoms/Box";
import { Icon } from "atoms/Icon";
import { Row } from "atoms/Row";
import { Text } from "atoms/Text";
import { Touch } from "atoms/Touch";
import { LocaleString } from "locales/en";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { goBack } from "services/NavigationService";

type NavbarProps = {
  overrideBack?: () => void;
  title?: LocaleString;
  showBack?: boolean;
  backIcon?: boolean;
  containerProps?: BoxProps;
  renderRight?: React.ReactNode;
  heading?: string;
};
export const Navbar = ({
  overrideBack,
  title,
  showBack,
  containerProps,
  backIcon,
  renderRight,
  heading,
}: NavbarProps) => {
  const { top } = useSafeAreaInsets();
  const handleBack = () => {
    if (typeof overrideBack === "function") {
      overrideBack();
    } else {
      goBack();
    }
  };
  return (
    <Box bg="primary" style={{ paddingTop: top }} {...containerProps}>
      <Row
        alignItems="center"
        px="m"
        pt="ml"
        pb="m"
        width="100%"
        justifyContent="center">
        {showBack ? (
          <Touch position="absolute" left={10} p="sl" onPress={handleBack}>
            <Icon
              size={16}
              color="whiteText"
              name={backIcon ? "back" : "cancel"}
            />
          </Touch>
        ) : null}
        {title && (
          <Text variant="headline" color="whiteText" localeId={title} />
        )}
        {heading && (
          <Text variant="headline" color="whiteText">
            {heading}
          </Text>
        )}
        {renderRight ? (
          <Box right={18} zIndex={999} position="absolute">
            {renderRight}
          </Box>
        ) : (
          <Box />
        )}
      </Row>
    </Box>
  );
};

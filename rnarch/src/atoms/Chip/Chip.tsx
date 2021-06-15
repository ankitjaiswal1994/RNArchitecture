import React from "react";
import { BoxProps } from "atoms/Box";
import { Text } from "atoms/Text";
import { Row } from "atoms/Row";
import { Icon } from "atoms/Icon";

export type ChipProps = {
  text: string;
  onClose?: (...args: any) => void;
} & BoxProps;
export const Chip = ({ text, onClose, ...props }: ChipProps) => {
  return (
    <Row
      alignItems="center"
      px="ml"
      py="sl"
      justifyContent="center"
      bg="chipBackground"
      maxWidth={165}
      borderRadius={20}
      {...props}>
      <Text variant="regular" fontSize={13} color="darkText">
        {text}
      </Text>
      <Icon onPress={onClose} ml="s" color="darkText" size={11} name="cancel" />
    </Row>
  );
};

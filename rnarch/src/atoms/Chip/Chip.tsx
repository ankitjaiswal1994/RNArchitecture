import React, { FC, useCallback } from 'react';
import { Box, BoxProps } from 'atoms/Box';
import { Text, TextProps } from 'atoms/Text';
import { TouchableOpacity } from 'react-native';

export type ChipProps = {
  text: string;
  active?: boolean;
  textProps?: TextProps;
} & BoxProps;
export const Chip: FC<ChipProps> = ({
  text,
  textProps,
  active,
  onPress,
  ...props
}) => {
  const textColor = active ? 'cream.100' : 'primarytext.100';
  const backgroundColor = active ? 'primary.100' : '#e8e5f8';
  const handlePress = useCallback(() => {
    if (typeof onPress === 'function') {
      onPress(!active);
    }
  }, [onPress, active]);
  return (
    <Box
      as={TouchableOpacity}
      backgroundColor={backgroundColor}
      borderRadius="full"
      alignItems="center"
      justifyContent="center"
      py="3.5px"
      px="8px"
      onPress={handlePress}
      {...props}>
      <Text
        textTransform="capitalize"
        color={textColor}
        variant="body"
        {...textProps}>
        {text}
      </Text>
    </Box>
  );
};

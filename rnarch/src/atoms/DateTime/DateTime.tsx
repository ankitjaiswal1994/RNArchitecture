import React, { FC } from 'react';
import { Box } from 'atoms/Box';
import { ImageIcon } from 'atoms/ImageIcon';
import { Text, TextProps } from 'atoms/Text';

type DateTimeProps = {
  showIcon?: boolean;
  date?: string;
  iconSize?: number;
} & TextProps;

/**
 * @param showIcon - Determines weather to show the left icon or not
 * @param date - date to be displayed
 */
export const DateTime: FC<DateTimeProps> = ({
  showIcon,
  iconSize,
  color,
  date,
  ...props
}) => {
  return (
    <Box flexDirection="row" alignItems="center">
      {showIcon && date !== undefined && date !== null && (
        <ImageIcon name="calendar" mr="6px" tintColor={color} size={iconSize} />
      )}
      <Text color={color} variant="body-small" {...props}>
        {date}
      </Text>
    </Box>
  );
};
DateTime.defaultProps = {
  showIcon: false,
  iconSize: 13,
};

import React, { FC } from 'react';
import { Box, BoxProps } from '../Box';
import { Text, TextBaseProps } from '../Text';

type TagProps = {
  text: string;
  color?: string;
  selected?: boolean;
  containerProps?: BoxProps;
} & TextBaseProps;

/**
 *
 * @param text - Tag text to be displayed
 * @param color - Tag color to be displayed, defaults to goldentext.
 * @param selected boolean - turns the icon hollow or filled on the bases of this prop..
 */
export const Tag: FC<TagProps> = ({
  text,
  color,
  selected,
  containerProps,
  ...props
}) => {
  const backgroundColor = selected ? 'white' : color;
  return (
    <Box flexDirection="row" alignItems="center" {...containerProps}>
      <Box
        width="8px"
        height="8px"
        borderRadius="4px"
        borderWidth="1px"
        borderColor={color}
        backgroundColor={backgroundColor}
      />
      <Text
        marginLeft="8px"
        color={color}
        textTransform="uppercase"
        variant="h3bold"
        {...props}>
        {text}
      </Text>
    </Box>
  );
};
Tag.defaultProps = {
  color: 'goldtext.100',
};
Tag.displayName = 'Tag';

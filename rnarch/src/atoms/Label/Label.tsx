import React, { FC } from 'react';
import { TextProps, Text } from 'atoms/Text';

type LabelProps = TextProps;
export const Label: FC<LabelProps> = ({ children, ...props }) => {
  return (
    <Text
      textTransform="uppercase"
      variant="label"
      color="darkgrey.100"
      {...props}>
      {children}
    </Text>
  );
};

import { Box, BoxProps } from "atoms/Box";
import { Row } from "atoms/Row";
import React from "react";

export type InputSpliterProps = {
  children: [React.ReactNode, React.ReactNode];
} & Omit<BoxProps, "children">;
export const InputSpliter = ({ children, ...props }: InputSpliterProps) => {
  return (
    <Row width="100%" {...props}>
      <Box flex={1}>{children[0]}</Box>
      <Box width={24} />
      <Box flex={1}>{children[1]}</Box>
    </Row>
  );
};

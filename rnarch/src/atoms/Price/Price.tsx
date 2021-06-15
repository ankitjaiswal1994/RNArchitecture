import { Text, TextProps } from "atoms/Text";
import React from "react";

type PriceProps = { amount: string | number } & TextProps;
export const Price = ({ amount, ...props }: PriceProps) => {
  return <Text {...props}>${amount}</Text>;
};

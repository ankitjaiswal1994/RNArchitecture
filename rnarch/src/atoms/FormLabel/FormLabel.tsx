import React from "react";
import { TextProps, Text } from "atoms/Text";

export const FormLabel = (props: TextProps) => {
  return <Text mt="l" variant="title" color="greyText" mb="m" {...props} />;
};

import React from "react";
import { HelperText } from "react-native-paper";
import { OptionalLocalString, LocaleString } from "locales/en";
import { translate } from "utils/locale";

export type ErrorTextProps = {
  error?: OptionalLocalString | false;
};
export const ErrorText = ({ error }: ErrorTextProps) => {
  return (
    <HelperText type="error" visible={Boolean(error)}>
      {translate(`${error}` as LocaleString)}
    </HelperText>
  );
};

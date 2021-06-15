import React from "react";
import { Icon, IconProps } from "atoms/Icon";
import { PressEvent } from "typings/events";
import { Merge } from "typings/utils";
import { Touch } from "atoms/Touch";

type CheckBoxProps = Merge<
  {
    checked: boolean;
    onPress?: PressEvent;
  },
  Partial<IconProps>
>;

export const CheckBox = ({ checked, onPress, ...props }: CheckBoxProps) => {
  return (
    <Touch onPress={onPress}>
      <Icon
        name={checked ? "check_box_selected" : "uncheck_box"}
        color={checked ? "primary" : "textInputBorderColor"}
        size={20}
        {...props}
      />
    </Touch>
  );
};

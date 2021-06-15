import React from "react";
import { Icon, IconProps } from "atoms/Icon";
import { PressEvent } from "typings/events";
import { Merge } from "typings/utils";
import { Touch } from "atoms/Touch";

type SwitchProps = Merge<
  {
    checked: boolean;
    onPress?: PressEvent;
  },
  Partial<IconProps>
>;

export const Switch = ({ checked, onPress, ...props }: SwitchProps) => {
  return (
    <Touch onPress={onPress}>
      <Icon
        name={checked ? "toggle-on" : "toggle-off"}
        color={checked ? "primary" : "disabled"}
        size={22}
        {...props}
      />
    </Touch>
  );
};

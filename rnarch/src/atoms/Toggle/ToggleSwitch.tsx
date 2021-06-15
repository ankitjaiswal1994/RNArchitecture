import React from "react";
import { IconProps } from "atoms/Icon";
import { PressEvent } from "typings/events";
import { Merge } from "typings/utils";
import { Switch } from "react-native-paper";

type SwitchProps = Merge<
  {
    isSwitchOn: boolean;
    onToggleSwitch?: PressEvent;
    color?: string;
  },
  Partial<IconProps>
>;

export const ToggleSwitch = ({
  isSwitchOn,
  onToggleSwitch,
  color,
}: SwitchProps) => {
  return (
    <Switch
      value={isSwitchOn}
      onValueChange={onToggleSwitch}
      color={color ? color : "#fff"}
      style={{
        borderColor: color ? color : "#fff",
        borderWidth: 1,
        borderRadius: 15,
        width: 50,
      }}
    />
  );
};

import React from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { PressEvent } from "typings/events";

type DateTimePickerProps = {
  visible: boolean;
  mode?: "date" | "time" | "datetime";
  onCancel: PressEvent;
  getDateTime: (date: Date) => void;
  initialDate?: Date;
  minimumDate?: "today" | Date;
  maximumDate?: "today" | Date;
  headerTextIOS?: string;
};

export const DateTimePicker = ({
  initialDate,
  visible,
  mode,
  onCancel,
  getDateTime,
  headerTextIOS,
  maximumDate,
  minimumDate,
}: DateTimePickerProps) => {
  return (
    <DateTimePickerModal
      headerTextIOS={headerTextIOS}
      isVisible={visible}
      mode={mode}
      date={initialDate ? initialDate : new Date()}
      maximumDate={maximumDate === "today" ? new Date() : maximumDate}
      onConfirm={getDateTime}
      onCancel={onCancel}
      isDarkModeEnabled={false}
      minimumDate={minimumDate ? new Date() : minimumDate}
    />
  );
};

DateTimePicker.defaultProps = {
  mode: "date",
};

import React from 'react';
import { Text, TextProps } from 'atoms/Text';
import { Merge } from 'typings/utils';

export type DateRangeProps = Merge<
  TextProps,
  {
    weekday: string;
    date: string;
    month: string;
    startTime: string;
    endTime: string;
  }
>;

export const DateRange = ({
  weekday,
  date,
  month,
  startTime,
  endTime,
  ...props
}: DateRangeProps) => {
  const datetime = `${weekday} ${date} ${month} \u2022 ${startTime} to ${endTime}`;
  return (
    <Text
      textAlign="center"
      textTransform="uppercase"
      fontFamily="bold"
      color="#8a8b96"
      {...props}>
      {datetime}
    </Text>
  );
};

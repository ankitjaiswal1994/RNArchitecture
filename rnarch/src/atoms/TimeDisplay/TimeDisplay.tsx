import React, { FC, useMemo } from 'react';
import { TextProps, Text } from 'atoms/Text';
import { hhmmssToLocalised } from 'utils/datetime';

export const FORMATS = {
  default: 'p',
};

type TimeDisplayProps = {
  format?: keyof typeof FORMATS;
  date: string | Date;
} & TextProps;
export const TimeDisplay: FC<TimeDisplayProps> = ({ date, ...props }) => {
  const formatedDate = useMemo(() => {
    return hhmmssToLocalised(date);
  }, [date]);

  return <Text {...props}>{formatedDate}</Text>;
};
TimeDisplay.defaultProps = {
  format: 'default',
};

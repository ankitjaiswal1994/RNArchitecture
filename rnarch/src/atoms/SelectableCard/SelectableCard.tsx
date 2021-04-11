import React, { FC, useMemo } from 'react';
import { Touch, TouchProps } from 'atoms/Touch';
import hexToRgba from 'hex-to-rgba';
import { useColor } from 'hooks/useColor';

interface SelectableCardProps extends TouchProps {
  selected?: boolean;
  selectableColor?: string;
}
export const SelectableCard: FC<SelectableCardProps> = ({
  children,
  selected,
  selectableColor = 'primary.100',
  ...props
}) => {
  const internalBackgroundColor = useColor(selectableColor || 'primary.100');
  const lightColor = useMemo(() => hexToRgba(internalBackgroundColor, 0.2), [
    internalBackgroundColor,
  ]);
  return (
    <Touch
      activeOpacity={1}
      borderWidth={selected ? '3px' : '0px'}
      borderColor={selected ? selectableColor : 'transparent'}
      borderRadius="card"
      backgroundColor={lightColor}
      overflow="hidden"
      alignSelf="center"
      width="80%"
      maxWidth="400px"
      height="102px"
      {...props}>
      {children}
    </Touch>
  );
};

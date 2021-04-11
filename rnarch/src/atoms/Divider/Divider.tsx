import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Divider as RNDivider } from 'react-native-paper';
import { StyledSystemAllProps } from 'typings/styles.types';
import {
  color,
  layout,
  grid,
  space,
  position,
  background,
  border,
  shadow,
  typography,
  flexbox,
} from 'styled-system';
import { Merge } from 'typings/utils';

const StyledDivider = styled(RNDivider)`

${space}
${color}
${layout}
${background}
${position}
${grid}
${border}
${typography}
${flexbox}
${shadow}
`;
export type DividerProps = Merge<{}, StyledSystemAllProps>;
export const Divider: FC<DividerProps> = props => {
  return <StyledDivider {...props} />;
};

import React, { FC } from 'react';
import styled from 'styled-components/native';
import { TextProps, Text } from 'atoms/Text';
import { variant as styledVariant, typography, color } from 'styled-system';
import { Merge } from 'typings/utils';

type Variant = 'small-regular' | 'small-bold' | 'medium' | 'large';

const HeadingBase = styled(Text)`
  ${styledVariant({
    variants: {
      large: {
        fontSize: 'h1',
        lineHeight: 'h1',
        letterSpacing: 'h1',
        fontFamily: 'h1',
      },
      medium: {
        fontSize: 'stats',
        lineHeight: 'stats',
        letterSpacing: 'stats',
        fontFamily: 'stats',
      },
      'small-regular': {
        fontSize: 'heading-small-regular',
        lineHeight: 'heading-small-regular',
        letterSpacing: 'heading-small-regular',
        fontFamily: 'heading-small-regular',
      },
      'small-bold': {
        fontSize: 'heading-small-bold',
        lineHeight: 'heading-small-bold',
        letterSpacing: 'heading-small-bold',
        fontFamily: 'heading-small-bold',
      },
    },
  })}
  ${typography}
  ${color}
`;

type HeadingInternalProps = { variant: Variant };
type HeadingProps = Merge<TextProps, HeadingInternalProps>;

export const Heading: FC<HeadingProps> = ({ variant, ...props }) => {
  return <HeadingBase variant={variant as any} {...props} />;
};

import React from 'react';
import { Box } from 'atoms/Box';
import {
  createRestyleComponent,
  createVariant,
  VariantProps,
} from '@shopify/restyle';
import { Theme } from 'styles/theme';

export const Card = createRestyleComponent<
  VariantProps<Theme, 'cardVariants'> & React.ComponentProps<typeof Box>,
  Theme
>([createVariant({ themeKey: 'cardVariants' })], Box);

Card.defaultProps = {
  variant: 'medium',
  borderRadius: 8,
  bg: 'whiteText',
};

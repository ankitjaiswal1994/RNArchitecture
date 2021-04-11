import React, { FC, useMemo } from 'react';
import { Card, CardProps } from 'atoms/Card';
import { Box } from 'atoms/Box';
import { CardRibbon } from 'atoms/CardRibbon/CardRibbon';

type AlignedInfoCardProps = {
  align: 'left' | 'right';
  gap?: string;
  containerProps?: CardProps;
  smallContent: React.FC | React.ComponentClass<any>;
  largeContent: React.FC | React.ComponentClass<any>;
  onCardPress?: (...args: any) => any;
  ribbonText?: string;
  ribbonColor?: string;
};

/**
 * A Primitive Card component which takes children and render them left to right according to properties.
 * Usefull when we want to display a similar alignment but with different components.
 *
 * @param left  - Determines at which direction the card content should flow.
 * @param leftContent  - Content to be shown on left side.
 * @param rightContent  - Content to be shown on right side.
 * @param gap  - an optional param, in case you want a space between left and right.
 */
export const AlignedInfoCard: FC<AlignedInfoCardProps> = ({
  align,
  smallContent,
  largeContent,
  gap,
  onCardPress,
  containerProps,
  ribbonText,
  ribbonColor,
}) => {
  const Small = useMemo(() => smallContent, [smallContent]);
  const Large = useMemo(() => largeContent, [largeContent]);
  const Gap = <Box p={gap} height="100%" backgroundColor="primary.100" />;
  const leftAlignedContent = (
    <>
      <Box flex={2}>{Small ? <Small /> : null}</Box>
      {Gap}
      <Box flex={4}>{Large ? <Large /> : null}</Box>
    </>
  );
  const rightAlignedContent = (
    <>
      <Box flex={4}>{Large ? <Large /> : null}</Box>
      {Gap}
      <Box flex={2}>{Small ? <Small /> : null}</Box>
    </>
  );
  return (
    <Card height="105px" onPress={onCardPress} {...containerProps}>
      {typeof ribbonText === 'string' && ribbonText ? (
        <CardRibbon text={ribbonText} color={ribbonColor} />
      ) : null}
      <Box flex={1} flexDirection="row" overflow="hidden" borderRadius="card">
        {align === 'left' ? leftAlignedContent : rightAlignedContent}
      </Box>
    </Card>
  );
};

AlignedInfoCard.defaultProps = {
  align: 'left',
  gap: '0px',
};

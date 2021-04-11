import React, { FC, useRef, useCallback } from 'react';
import { Card } from 'atoms/Card';
import { Touch } from 'atoms/Touch';
import { Image } from 'atoms/Image';
import {
  Transitioning,
  Transition,
  TransitioningView,
} from 'react-native-reanimated';
import { Box } from 'atoms/Box';
import { Text } from 'atoms/Text';
import { PressEvent } from 'typings/events';
import { DismisableCardFooter } from './atoms/DismisableCardFooter';
import { DismissedCard } from './atoms/DimissedCard';

type DismisableCardProps = {
  image?: string;
  title?: string;
  description?: string;
  isDismisable?: boolean;
  buttonLabel?: string;
  dismissed?: boolean;
  dismissText?: string;
  onDismiss: PressEvent;
  onPress?: PressEvent;
};

const transition = (
  <Transition.Sequence>
    <Transition.Out type="fade" />
    <Transition.In type="scale" />
  </Transition.Sequence>
);
export const DismisableCard: FC<DismisableCardProps> = ({
  image,
  title,
  description,
  buttonLabel,
  dismissed,
  isDismisable,
  dismissText,
  onPress,
  onDismiss,
}) => {
  const transitionRef = useRef<TransitioningView>(null);

  const handleInternalDismiss = useCallback(() => {
    transitionRef.current?.animateNextTransition();
    if (typeof onDismiss === 'function') {
      onDismiss();
    }
  }, [onDismiss]);

  const renderContent = () => {
    if (dismissed) {
      return <DismissedCard text={dismissText} />;
    }
    return (
      <Card bg="cream.100" mb="4px">
        <Touch
          activeOpacity={1}
          onPress={onPress}
          height="166px"
          width="100%"
          borderTopLeftRadius="card"
          borderTopRightRadius="card"
          overflow="hidden">
          {title ? (
            <Box variant="absolute-center">
              <Text variant="h1" color="white">
                {title}
              </Text>
            </Box>
          ) : null}
          <Text
            variant="placeholder"
            fontSize="12px"
            zIndex={1}
            color="white"
            textAlign="center"
            alignSelf="center"
            position="absolute"
            bottom="10px">
            {description}
          </Text>
          <Image flex={1} resizeMode="cover" uri={image} />
        </Touch>
        <DismisableCardFooter
          showIcon={isDismisable}
          buttonLabel={buttonLabel}
          onPress={handleInternalDismiss}
        />
      </Card>
    );
  };
  return (
    <Transitioning.View ref={transitionRef} transition={transition}>
      {renderContent()}
    </Transitioning.View>
  );
};

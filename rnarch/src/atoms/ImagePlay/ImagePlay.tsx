import React, { FC } from 'react';
import { Image, ImageProps } from 'atoms/Image/Image';
import { Box } from 'atoms/Box';
import { Icon } from 'atoms/Icon';
import { Touch, TouchProps } from 'atoms/Touch';
import { BlurView } from '@react-native-community/blur';
import { StyleSheet } from 'react-native';

type ImagePlayProps = {
  src: string;
  color?: string;
  hasAccess?: boolean;
  onError?: ImageProps['onError'];
  onLoadState?: ImageProps['onLoadStart'];
} & TouchProps;
export const ImagePlay: FC<ImagePlayProps> = ({
  src,
  color,
  hasAccess,
  onError,
  onLoadState,
  ...props
}) => {
  return (
    <Touch activeOpacity={0.9} borderRadius="card" overflow="hidden" {...props}>
      <Box variant="absolute-center">
        {hasAccess === true ? (
          <Box
            height="32px"
            opacity={0.8}
            width="32px"
            bg="#8c79d1"
            borderRadius={16}
            alignItems="center"
            justifyContent="center">
            <Icon size={12} name="play-1" alignSelf="center" color="white" />
          </Box>
        ) : (
          <Box
            height="32px"
            width="32px"
            borderRadius={16}
            opacity={0.8}
            bg="#f1d6a7"
            alignItems="center"
            justifyContent="center">
            <Icon size={12} name="lock-1" alignSelf="center" color="white" />
          </Box>
        )}
      </Box>
      <Image
        src={src}
        resizeMode="cover"
        flex={1}
        onError={onError}
        onLoadStart={onLoadState}
      />
    </Touch>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

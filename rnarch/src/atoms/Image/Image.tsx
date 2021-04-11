import React, { FC, useMemo } from 'react';
import FastImage, { FastImageProps, Source } from 'react-native-fast-image';
import { Box, BoxProps } from 'atoms/Box';
import { useColor } from 'hooks/useColor';

type ImageBaseProps = {} & BoxProps & Partial<FastImageProps>;

const ImageBase: FC<ImageBaseProps> = props => (
  <Box as={FastImage as any} {...props} />
);

export type ImageProps = {
  src?: Source['uri'];
  uri?: Source['uri'];
  priority?: Source['priority'];
  headers?: Source['headers'];
  cache?: Source['cache'];
} & ImageBaseProps;
export const Image: FC<ImageProps> = ({
  src,
  uri,
  priority,
  headers,
  cache,
  tintColor,
  ...props
}) => {
  /** Fast Image Crashes when url doesn't start with http or https */
  const internalTintColor = useColor(tintColor as string);

  const normalisedSource: Source | undefined = useMemo(() => {
    const internalSource = {
      uri: src || uri,
      headers,
      cache,
      priority,
    };
    return typeof internalSource.uri === 'string' &&
      !internalSource.uri.split('http')[1]
      ? undefined
      : internalSource;
  }, [src, uri, headers, cache, priority]);

  return (
    <ImageBase
      source={normalisedSource}
      tintColor={tintColor ? internalTintColor : undefined}
      {...props}
    />
  );
};
Image.defaultProps = {
  resizeMode: 'contain',
};
Image.displayName = 'Image';

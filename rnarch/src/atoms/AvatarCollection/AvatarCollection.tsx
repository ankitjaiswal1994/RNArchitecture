import { BoxProps } from "atoms/Box";
import { Row } from "atoms/Row";
import React from "react";
import { Image } from "atoms/Image";

export type AvatarCollectionProps = {
  images: Array<string>;
} & BoxProps;
export const AvatarCollection = ({
  images,
  ...props
}: AvatarCollectionProps) => {
  return (
    <Row {...props}>
      {images.map((im, i) => (
        <Image
          marginLeft={i === 0 ? undefined : "-ml"}
          height={34}
          width={34}
          borderRadius={17}
          source={{ uri: im }}
          key={i.toString()}
        />
      ))}
    </Row>
  );
};

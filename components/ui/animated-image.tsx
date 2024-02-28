'use client';

import { ImageProps } from 'next/image';
import { useState } from 'react';

import * as Styled from './animated-image.styled';

type AnimatedImageProps = ImageProps;

const AnimatedImage: React.FC<AnimatedImageProps> = ({ ...rest }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <Styled.AnimatedImage
      $isLoaded={!isImageLoading}
      {...rest}
      onLoad={() => setIsImageLoading(false)}
      onError={() => setIsImageLoading(false)}
    />
  );
};

export default AnimatedImage;

'use client';

import Image from 'next/image';
import styled, { css } from 'styled-components';

export const AnimatedImage = styled(Image)<{ $isLoaded: boolean }>`
  object-fit: cover;

  transition: scale 300ms ease-out, filter 500ms ease-out;

  ${({ $isLoaded }) =>
    !$isLoaded &&
    css`
      filter: grayscale(0.8) blur(40px);
    `}
`;

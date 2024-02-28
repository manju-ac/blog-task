'use client';

import styled, { keyframes } from 'styled-components';

const loaderRotateKeyFrames = keyframes`
100% {
    rotate: 0 0 1 360deg
}
`;

export const LoaderWrapper = styled.div`
  height: 50vh;
  display: grid;
  place-items: center;

  & > svg {
    width: 5rem;
    color: #a7a7a7;
    animation: ${loaderRotateKeyFrames} 3s linear infinite;
  }
`;

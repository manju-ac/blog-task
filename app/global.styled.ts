'use client';

import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  padding: 0 1.5rem;
  max-width: 70rem;
  margin: 0 auto;
`;

export const Main = styled.main`
  margin-top: 5rem;
`;

const skeletonFade = keyframes`
0% {

}
100% {
  opacity: .4;
}
`;

export const skeletonBase = css`
  background-color: hsl(195 30% 80% / 0.4);
  animation: ${skeletonFade} 1s infinite alternate;
`;

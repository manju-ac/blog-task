'use client';

import styled, { css, keyframes } from 'styled-components';

export const App = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Container = styled.div`
  padding: 0 1.5rem;
  width: 100%;
  max-width: 65rem;
  margin: 0 auto;
  flex: 1;
`;

export const Main = styled.main`
  margin: 6rem 0 2rem;
  height: 100%;
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

export const NotFoundMessageWrapper = styled.div`
  height: 50vh;
  display: grid;
  place-items: center;

  p {
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 1px 1px #00000050;
  }
`;

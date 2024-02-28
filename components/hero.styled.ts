'use client';

import styled from 'styled-components';

export const Hero = styled.section`
  padding: 2rem 1rem;
  position: relative;
  isolation: isolate;
  overflow: hidden;
  margin-bottom: 2rem;

  @media (min-width: 640px) {
    padding: 3rem 1rem;
  }
`;

export const HeroText = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  margin: 0;

  @media (min-width: 640px) {
    font-size: 4rem;
  }
`;

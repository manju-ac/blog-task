'use client';

import styled from 'styled-components';

import { screen } from '@/app/mixins.styled';

export const Hero = styled.section`
  padding: 2rem 1rem;
  position: relative;
  isolation: isolate;
  overflow: hidden;
  margin-bottom: 2rem;

  ${screen['sm']`
    padding: 3rem 1rem;
  `}
`;

export const HeroText = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  margin: 0;

  ${screen['sm']`
    font-size: 4rem;
  `}
`;

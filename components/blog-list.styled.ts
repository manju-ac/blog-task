'use client';

import styled from 'styled-components';

import { screen } from '@/app/mixins.styled';

export const BlogList = styled.ul`
  display: grid;
  gap: 2rem;

  ${screen['sm']`
    grid-template-columns: repeat(2, 1fr)
  `}

  ${screen['md']`
    grid-template-columns: repeat(3, 1fr)
  `}
`;

export const BlogListNoResultsMessage = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin: 3rem 0;
`;

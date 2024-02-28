'use client';

import styled from 'styled-components';

export const BlogList = styled.ul`
  display: grid;
  gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const BlogListNoResultsMessage = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin: 3rem 0;
`;

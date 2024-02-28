'use client';

import styled, { css } from 'styled-components';
import Button from './ui/button';

export const PaginationBar = styled.ul`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin: 2rem 0;
`;

export const PaginationButton = styled(Button).attrs({ variant: 'ghost' })<{
  $active?: boolean;
}>`
  & > svg {
    opacity: 0.7;
    width: 1.25rem;
    stroke-width: 1.5px;
  }

  ${({ $active }) =>
    $active &&
    css`
      background-color: hsl(195 40% 88%);
    `}
`;

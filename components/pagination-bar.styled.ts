'use client';

import styled, { css } from 'styled-components';

import Button from './ui/button';

export const PaginationBar = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: max-content;
  gap: 0.5rem;
  margin: 3rem auto;
`;

export const PaginationBarButton = styled(Button).attrs({ variant: 'ghost' })<{
  $active?: boolean;
}>`
  min-width: 2.3rem;
  aspect-ratio: 1;
  border-radius: 50%;

  & > svg {
    opacity: 0.7;
    width: 0.8rem;
    vertical-align: middle;
  }

  ${({ $active }) =>
    $active &&
    css`
      background-color: hsl(var(--color-accent) / 0.25);
    `}
`;

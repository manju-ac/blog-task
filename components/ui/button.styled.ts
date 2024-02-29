'use client';

import styled, { css } from 'styled-components';

export type Variant = 'ghost';

export const Button = styled.button<{ $variant?: Variant }>`
  background: none;
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;

  &:not(:disabled) {
    cursor: pointer;
  }

  ${({ $variant }) => {
    switch ($variant) {
      case 'ghost':
        return css`
          background: none;
          border: none;
          transition: background-color 200ms;

          &:not(:disabled):hover {
            background-color: hsl(var(--color-accent) / 0.4);
          }
        `;
    }
  }}
`;

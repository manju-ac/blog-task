'use client';

import styled, { css } from 'styled-components';

export const IconWrapper = styled.span<{ $size?: 'sm' | 'lg' }>`
  display: inline-block;
  margin-right: 0.5rem;

  & > svg {
    vertical-align: middle;
  }

  ${({ $size }) => {
    switch ($size) {
      case 'sm':
        return css`
          & > svg {
            width: 1rem;
          }
        `;
    }
  }}
`;

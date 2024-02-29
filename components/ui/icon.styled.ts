'use client';

import styled, { css } from 'styled-components';

export const Icon = styled.p<{
  $size?: 'sm';
  $label?: string | number;
}>`
  & > svg {
    vertical-align: middle;
  }

  ${({ $label }) =>
    $label &&
    css`
      display: flex;
      align-items: center;
    `}

  ${({ $size, $label }) => {
    switch ($size) {
      case 'sm':
        return css`
          font-size: 0.8rem;
          & > svg {
            width: 1rem;
            ${$label &&
            css`
              margin-right: 0.5rem;
            `}
          }
        `;
    }
  }}
`;

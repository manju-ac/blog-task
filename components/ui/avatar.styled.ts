'use client';

import styled, { css } from 'styled-components';

export const AvatarWrapper = styled.span<{ $size?: 'sm' | 'md' }>`
  border-radius: 50%;
  aspect-ratio: 1;
  position: relative;
  overflow: hidden;

  ${({ $size }) => {
    switch ($size) {
      case 'sm':
        return css`
          width: 3rem;
        `;
      case 'md':
        return css`
          width: 10rem;
        `;
    }
  }}
`;

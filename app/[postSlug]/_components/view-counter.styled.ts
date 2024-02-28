'use client';

import { skeletonBase } from '@/app/global.styled';
import styled, { css } from 'styled-components';

export const ViewCounter = styled.span<{ $skeleton: boolean }>`
  vertical-align: middle;

  ${({ $skeleton }) =>
    $skeleton &&
    css`
      display: inline-block;
      width: 5rem;
      height: 1.25rem;
      border-radius: 0.5rem;
      ${skeletonBase}
    `}
`;

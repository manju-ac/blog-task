'use client';

import styled, { css } from 'styled-components';

export const SidebarToggleButton = styled.button<{ $isOpen: boolean }>`
  width: 1.25rem;
  aspect-ratio: 1;
  padding: 0;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;

  span {
    display: inline-block;
    height: 0.15rem;
    width: 100%;
    border-radius: 0.25rem;
    background-color: #121212;
    position: relative;
    vertical-align: middle;

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: inherit;
      transition: transform 500ms ease-out;
    }

    &::before {
      transform: translateY(-0.4rem);
    }

    &::after {
      transform: translateY(0.4rem);
    }
  }

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      span {
        visibility: hidden;

        &::before {
          visibility: visible;
          transform: translateY(0) rotateZ(225deg);
        }

        &::after {
          visibility: visible;
          transform: translateY(0) rotateZ(-225deg);
        }
      }
    `}

  @media (min-width: 640px) {
    display: none;
  }
`;

'use client';

import styled, { css, keyframes } from 'styled-components';

const navRoutesFadeInKeyframes = keyframes`
0% {
    opacity: 0;
    translate: 5rem 0 0;
}
100% {
    opacity: 1;
    
}
`;

export const Sidebar = styled.aside<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 4rem;
  height: calc(100vh - 4rem);
  width: 70%;
  transform: translateX(-100%);
  padding: 1rem;
  background-color: #ffffff;
  transition: transform 500ms cubic-bezier(0, 0, 0.26, 1.07);
  z-index: 3;

  & > * {
    transition: translate 300ms ease-out, opacity 300ms;
  }

  ${({ $isOpen }) =>
    $isOpen
      ? css`
          transform: translateX(0);

          & > * {
            transition-delay: 300ms;
          }
        `
      : css`
          & > * {
            opacity: 0;
            translate: 5rem 0 0;
          }
        `}
`;

export const SidebarBackdrop = styled.div<{ $isOpen: boolean }>`
  display: none;
  background-color: #00000040;
  position: fixed;
  left: 0;
  top: 4rem;
  height: calc(100vh - 4rem);
  width: 100%;
  z-index: 2;
  backdrop-filter: blur(10px);

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      display: block;
    `}
`;

'use client';

import Link from 'next/link';
import styled, { css } from 'styled-components';

import { Container } from '@/app/global.styled';

export const Header = styled.header<{ $isSidebarOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem;
  z-index: 1;
  padding: 1rem 0;
  border-bottom: 1px solid #00000030;
  background-color: #ffffff30;
  backdrop-filter: blur(10px);
  transition: background-color 500ms, backdrop-filter 500ms;

  ${({ $isSidebarOpen }) =>
    $isSidebarOpen &&
    css`
      background-color: #ffffff;
      backdrop-filter: blur(0px);
    `}
`;

export const HeaderContentWrapper = styled(Container)`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;

export const HeaderLogo = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  color: currentColor;
`;

export const HeaderOptions = styled.div`
  display: none;
  flex: 1;

  @media (min-width: 640px) {
    display: block;
  }
`;

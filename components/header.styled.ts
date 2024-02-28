'use client';

import Link from 'next/link';
import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  font-size: 1.5rem;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  padding: 1rem 0;
  border-bottom: 1px solid #00000030;
  background-color: #ffffff30;
  backdrop-filter: blur(10px);
`;

export const Logo = styled(Link)`
  text-decoration: none;
  color: currentColor;
`;

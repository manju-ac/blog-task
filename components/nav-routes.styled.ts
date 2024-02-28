'use client';

import Link from 'next/link';
import styled from 'styled-components';

import { Sidebar } from './sidebar.styled';

export const NavRoutes = styled.nav`
  ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;

    li {
      padding: 0.25rem 1rem;
      border-radius: 0.5rem;
    }
  }

  ${Sidebar} & {
    ul {
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export const NavRoutesLink = styled(Link)`
  text-decoration: none;
  color: currentColor;
  transition: background-color 200ms;
  padding: 0.25rem 1rem;
  border-radius: 0.5rem;

  &:hover {
    background-color: hsl(195 20% 80% / 0.2);
  }

  ${Sidebar} & {
    background-color: hsl(195 20% 80% / 0.2);
  }
`;

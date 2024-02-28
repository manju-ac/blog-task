'use client';

import useMobileNav from '@/hooks/use-mobile-nav';
import * as Styled from './header.styled';
import NavRoutes from './nav-routes';
import SidebarToggleButton from './sidebar-toggle-button';

const Header = () => {
  const { isOpen: isSidebarOpen } = useMobileNav(({ isOpen }) => ({ isOpen }));

  return (
    <Styled.Header $isSidebarOpen={isSidebarOpen}>
      <Styled.HeaderContentWrapper>
        <SidebarToggleButton />
        <Styled.HeaderLogo href='/' replace>
          Blog
        </Styled.HeaderLogo>
        <Styled.HeaderOptions>
          <NavRoutes />
        </Styled.HeaderOptions>
      </Styled.HeaderContentWrapper>
    </Styled.Header>
  );
};

export default Header;

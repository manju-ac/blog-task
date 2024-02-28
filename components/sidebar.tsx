'use client';

import useMobileNav from '@/hooks/use-mobile-nav';
import NavRoutes from './nav-routes';
import * as Styled from './sidebar.styled';

const Sidebar = () => {
  const { isOpen, hide } = useMobileNav(({ isOpen, show, hide }) => ({
    isOpen,
    hide
  }));

  return (
    <>
      <Styled.SidebarBackdrop $isOpen={isOpen} onClick={() => hide()} />
      <Styled.Sidebar $isOpen={isOpen}>
        <NavRoutes onClick={hide} />
      </Styled.Sidebar>
    </>
  );
};

export default Sidebar;

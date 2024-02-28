'use client';

import useMobileNav from '@/hooks/use-mobile-nav';
import * as Styled from './sidebar-toggle-button.styled';

const SidebarToggleButton = () => {
  const { isOpen, show, hide } = useMobileNav(({ isOpen, show, hide }) => ({
    isOpen,
    show,
    hide
  }));

  return (
    <Styled.SidebarToggleButton
      $isOpen={isOpen}
      onClick={() => (isOpen ? hide() : show())}
    >
      <span />
    </Styled.SidebarToggleButton>
  );
};

export default SidebarToggleButton;

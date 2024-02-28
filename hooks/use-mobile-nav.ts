import { create } from 'zustand';

type MobileNavProps = {
  isOpen: boolean;
  show: () => void;
  hide: () => void;
};

const useMobileNav = create<MobileNavProps>(set => ({
  isOpen: false,
  show: () => set({ isOpen: true }),
  hide: () => set({ isOpen: false })
}));

export default useMobileNav;

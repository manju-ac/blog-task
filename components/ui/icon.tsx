import { LucideIcon } from 'lucide-react';

import * as Styled from './icon.styled';

type IconProps = {
  icon: LucideIcon;
  size?: 'sm' | 'lg';
};

const Icon: React.FC<IconProps> = ({ icon: CustomLucideIcon, size }) => {
  return (
    <Styled.IconWrapper $size={size}>
      <CustomLucideIcon />
    </Styled.IconWrapper>
  );
};

export default Icon;

import { LucideIcon } from 'lucide-react';

import * as Styled from './icon.styled';

type IconProps = {
  icon: LucideIcon;
  label?: string | number;
  size?: 'sm';
  className?: string;
};

const Icon: React.FC<IconProps> = ({
  icon: CustomLucideIcon,
  label,
  size,
  className
}) => {
  return (
    <Styled.Icon $size={size} $label={label} className={className}>
      <CustomLucideIcon />
      {label}
    </Styled.Icon>
  );
};

export default Icon;

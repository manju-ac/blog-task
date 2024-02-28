'use client';

import { ButtonHTMLAttributes } from 'react';

import * as Styled from './button.styled';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: Styled.Variant;
};

const Button: React.FC<ButtonProps> = ({ variant, children, ...rest }) => {
  return (
    <Styled.Button $variant={variant} {...rest}>
      {children}
    </Styled.Button>
  );
};

export default Button;

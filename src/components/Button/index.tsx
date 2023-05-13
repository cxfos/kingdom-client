import React from 'react';

import * as S from './styles';

export type ButtonProps = {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  
  return (
    <S.Button primary={primary} size={size} {...props}  type={'button'} >
      {label}
    </S.Button>
  );
};

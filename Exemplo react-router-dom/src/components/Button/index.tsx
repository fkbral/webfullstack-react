import React from 'react';
import { ButtonContainer } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  loading?: boolean;
  children: React.ReactNode;
  backgroundColor?: string;
}

export default function Button({
  children,
  loading,
  onClick,
  ...rest
}: ButtonProps) {
  function onClickInterno() {
    console.log('Fui clicado!');
    onClick && onClick();
  }

  return (
    <ButtonContainer
      type="button"
      onClick={onClickInterno}
      disabled={loading}
      {...rest}
    >
      {loading ? 'Carregando...' : children}
    </ButtonContainer>
  );
}

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  children: React.ReactNode;
}

export default function Button({ children, onClick, ...rest }: ButtonProps) {
  function onClickInterno() {
    console.log('Fui clicado!');
    onClick && onClick();
  }

  return (
    <button type="button" onClick={onClickInterno} {...rest}>
      {children}
    </button>
  );
}

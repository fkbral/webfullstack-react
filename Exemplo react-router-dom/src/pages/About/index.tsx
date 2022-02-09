import React from 'react';
import Button from '../../components/Button';
import Menu from '../../components/Menu';
import { useTheme } from '../../hooks/theme';

export default function About() {
  const { theme, setDarkTheme, setLightTheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#000',
      }}
    >
      <Menu />
      <h1
        style={{
          color: theme === 'dark' ? '#fff' : '#000',
        }}
      >
        About
      </h1>
      <span
        style={{
          color: theme === 'dark' ? '#fff' : '#000',
        }}
      >
        Tema escolhido: {theme}
      </span>
      <br />
      <Button
        onClick={() => {
          theme === 'light' ? setDarkTheme() : setLightTheme();
        }}
      >
        Alternar temas
      </Button>
    </div>
  );
}

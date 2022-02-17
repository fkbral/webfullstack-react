import {
  useContext,
  createContext,
  useState,
  useMemo,
  useCallback,
} from 'react';
import { usePersistentState } from '../utils/usePersistentState';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

interface ThemeContextData {
  theme: 'light' | 'dark';
  setLightTheme: () => void;
  setDarkTheme: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

// "Reservamos" o context na nossa aplicação
const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const themeKey = '@Turma736:theme';

// Preenchemos as informações do nosso contexto
export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = usePersistentState<'light' | 'dark'>(
    themeKey,
    'light'
  );

  function saveTheme(newTheme: 'light' | 'dark') {
    localStorage.setItem(themeKey, newTheme);
  }

  const setLightTheme = useCallback(() => {
    setTheme('light');
    saveTheme('light');
  }, []);

  const setDarkTheme = useCallback(() => {
    setTheme('dark');
    saveTheme('dark');
  }, []);

  const themeData = useMemo(
    () => ({
      theme: theme,
      setLightTheme,
      setDarkTheme,
    }),
    [theme, setLightTheme, setDarkTheme]
  );

  return (
    <ThemeContext.Provider value={themeData}>
      <StyledThemeProvider theme={theme === 'light' ? light : dark}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);
  return context;
}

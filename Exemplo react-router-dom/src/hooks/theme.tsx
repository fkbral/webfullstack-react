import { useContext, createContext, useState, useMemo } from 'react';

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

// Preenchemos as informações do nosso contexto
export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  function setLightTheme() {
    setTheme('light');
  }

  function setDarkTheme() {
    setTheme('dark');
  }

  const themeData = useMemo(
    () => ({
      theme: theme,
      setLightTheme,
      setDarkTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={themeData}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);
  return context;
}

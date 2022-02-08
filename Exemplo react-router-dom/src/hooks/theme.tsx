import { useContext, createContext, useState, useMemo } from 'react';

interface ThemeContextData {
  theme: string;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

// "Reservamos" o context na nossa aplicação
const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

// Preenchemos as informações do nosso contexto
export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const themeData = useMemo(
    () => ({
      theme: theme,
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

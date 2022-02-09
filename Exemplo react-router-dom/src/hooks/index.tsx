import React from 'react';
import { SettingsProvider } from './settings';
import { ThemeProvider } from './theme';

interface ContextsProviderProps {
  children: React.ReactNode;
}

// children vai ter as minhas rotas
export default function ContextsProvider({ children }: ContextsProviderProps) {
  return (
    <SettingsProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </SettingsProvider>
  );
}

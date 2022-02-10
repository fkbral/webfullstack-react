import React from 'react';
import { SettingsProvider } from './settings';
import { AuthProvider } from './auth';
import { ThemeProvider } from './theme';

interface ContextsProviderProps {
  children: React.ReactNode;
}

// children vai ter as minhas rotas
export default function ContextsProvider({ children }: ContextsProviderProps) {
  return (
    <AuthProvider>
      <SettingsProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </SettingsProvider>
    </AuthProvider>
  );
}

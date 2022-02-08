import React from 'react';
import { ThemeProvider } from './theme';

interface ContextsProviderProps {
  children: React.ReactNode;
}

// children vai ter as minhas rotas
export default function ContextsProvider({ children }: ContextsProviderProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

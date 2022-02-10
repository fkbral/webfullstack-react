import React, { createContext, useContext, useState } from 'react';

interface User {
  name: string;
  email: string;
}

interface AuthContextData {
  user: User;
  // token: Token
  setUserData: (userData: User) => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// Prover as informações para todos os componentes filhos
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);

  function setUserData(userData: User) {
    setUser(userData);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  return context;
}

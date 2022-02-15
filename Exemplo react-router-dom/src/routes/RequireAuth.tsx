import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

export function RequireAuth({ children }: any) {
  const { user } = useAuth();
  const isAuthenticated = !!user?.id;
  return isAuthenticated ? children : <Navigate to="/" />;
}

// O exemplo acima é o mesmo que o código abaixo
// Todo componente React recebe props por padrão, e
// todo componente tem a prop children
// export function RequireAuth(props) {
//   const isAuthenticated = false;

//   return isAuthenticated ? props.children : <Navigate to="/" />;
// }

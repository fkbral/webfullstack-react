import React from 'react';
import { Navigate } from 'react-router-dom';

export function RequireAuth({ children }) {
  const isAuthenticated = false;
  return isAuthenticated ? children : <Navigate to="/" />;
}

// O exemplo acima é o mesmo que o código abaixo
// Todo componente React recebe props por padrão, e
// todo componente tem a prop children
// export function RequireAuth(props) {
//   const isAuthenticated = false;

//   return isAuthenticated ? props.children : <Navigate to="/" />;
// }

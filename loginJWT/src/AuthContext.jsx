import React, { createContext, useContext, useState} from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const token = localStorage.getItem('token');
    return !!token; 
  });

  const login = (token) => {
    setIsAuthenticated(true);
    localStorage.setItem('token', token); 
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('token'); 
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

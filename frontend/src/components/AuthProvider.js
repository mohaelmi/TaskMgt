import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const login = () => {
    setLoggedIn(true);
  };

  const logout = () => {
    setLoggedIn(false);
  };

  const [auth, setAuth] = useState({});
  return (
    <AuthContext.Provider value={{ auth, setAuth, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;

export const useAuth = () => {
  return useContext(AuthContext);
};

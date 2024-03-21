import React, {createContext, useState, FC, ReactNode} from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  email: string | null;
  token: string | null;
  login: (email: string, token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
interface IAuthProvider {
  children: ReactNode;
}
export const AuthProvider: FC<IAuthProvider> = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = (userEmail: string, token: string) => {
    setEmail(userEmail);
    setIsLoggedIn(true);
    setToken(token);
  };

  const logout = () => {
    setEmail(null);
    setIsLoggedIn(false);
    setToken(null);
  };

  const contextValue: AuthContextType = {
    isLoggedIn,
    email,
    token,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

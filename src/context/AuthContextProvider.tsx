import * as React from "react";

const initialState = {
  isAuthenticated: false,
  setIsAuthenticated: () => {},
};

interface IContext {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const authContext = React.createContext<IContext>(initialState);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const authContextObj = React.useMemo(
    () => ({
      isAuthenticated,
      setIsAuthenticated,
    }),
    [isAuthenticated]
  );

  return (
    <authContext.Provider value={authContextObj}>{children}</authContext.Provider>
  );
};

// hook for using context
export const useAuthContext = () => React.useContext(authContext);

export default AuthContextProvider;

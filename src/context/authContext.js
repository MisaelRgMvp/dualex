
import PropTypes from 'prop-types';
import {createContext, useCallback, useContext, useMemo, useState} from 'react';
export const AuthContext = createContext();
export function AuthContextProvider ({children}){
 
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = useCallback(function () {
         setIsAuthenticated(true);
      }, []);
    
      const logout = useCallback(function () {
        setIsAuthenticated(false);
      }, []);
    
      const value = useMemo(
        () => ({
          login,
          logout,
          isAuthenticated
        }),
        [isAuthenticated, login, logout]
      );
    
      return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
    }
    
    AuthContextProvider.propTypes = {
      children: PropTypes.object
    };
    
    export function useAuthContext() {
      return useContext(AuthContext);
    }
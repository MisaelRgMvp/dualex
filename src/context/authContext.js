
import PropTypes from 'prop-types';
import {createContext, useCallback, useContext, useMemo, useState} from 'react';


export const AuthContext = createContext({
  token: null,
  login: (payload) => {},
  logout: () => {}
});

export const useAuthContext = () => {
  const [token, setToken] = useState(null);

  const loginOk = (payload) => {
    setToken(payload.token);
    localStorage.setItem('token', payload.token);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return { token, loginOk, logout };
};

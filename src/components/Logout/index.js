import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Redirect } from 'react-router-dom';

const Logout = () => {
  const { setIsAuth, setToken } = useContext(AuthContext);
  setIsAuth(false);
  setToken('');
  localStorage.removeItem('maui_token')
  alert('Successful logout');
  return (
    <Redirect to="/login" />
  )
}

export default Logout;
import React from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import { useSelector } from 'react-redux';


const AuthLayout = () => {
  let { toggle } = useSelector((state) => state.toggle)
  return (
    <div className='h-screen flex  justify-center items-center ' >
      {toggle ? <Register /> : <Login />}
    </div>

  );
}

export default AuthLayout;

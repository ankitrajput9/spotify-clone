import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router';

const ProtectedRoute = () => {
    const{user}=useSelector((state)=>state.auth)
    console.log(user)
   
         if (!user) {
    return <Navigate to="/" replace />;
  }
    
  return <div><Outlet/></div>
}

export default ProtectedRoute;

import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, NavLink, Outlet, useNavigate } from 'react-router';

const PublicRoute = () => {

     const{user}=useSelector((state)=>state.auth)
     console.log(user)
  
    if(user){
   return <Navigate to="/home" />
    }
return <div><Outlet/></div>
}

export default PublicRoute;

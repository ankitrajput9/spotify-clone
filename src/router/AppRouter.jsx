import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import AuthLayout from '../layouts/AuthLayout';
import HomeLayout from '../layouts/HomeLayout';
import ProtectedRoute from '../components/ProtectedRoute';
import PublicRoute from '../components/PublicRoute';
import Mainpage from '../pages/Mainpage';
import Likedsongs from '../pages/Likedsongs';
import Mainplayer from '../pages/Mainplayer';

const App = () => {

const router = createBrowserRouter([
{
  path:"/",
  element:<PublicRoute/>,
    children:[{
      index:true,
      element:<AuthLayout/>
    },
  
    ]

//  Component:AuthLayout                   //  we can call component like that also in router 
},
{
  path:"/home",
  element:<ProtectedRoute/>,
  children:[{
    element:<HomeLayout/>,
     children: [
          {
            index: true,          // /home
            element: <Mainpage />,
          },
          {
            path: "liked",        // /home/liked
            element: <Likedsongs />,
          },
          {
            path:"player",
            element:<Mainplayer/>
          }
        ],
  }]
},
])

  return <RouterProvider router={router}/>
}

export default App;

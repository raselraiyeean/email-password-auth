import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import Login from './login/Login.jsx';
import Register from './register/Register.jsx';
import LayOut from './layout/LayOut.jsx';
import SignUp from './SignUp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },

      {
        path: 'sign-up',
        element: <SignUp></SignUp>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from "./Login";
import App from './App';
import Dashboard from "./Dashboard";
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfileCreation from './ProfileCreation';
import "bootstrap/dist/css/bootstrap.min.css";
import CSDDashboard from './CSDDashboard';
import CSMDashboard from './CSMDashboard';
import ITDashboard from './ITDashBoard';
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <Login /> },
  { path: "/attendance/cse", element: <Dashboard /> },
  {path:"/studentlogin",element:<Login/>},
  {path:"/attendance/csm",element:<CSMDashboard/>},
  {path:"/attendance/it",element:<ITDashboard/>},
  {path:"/attendance/csd",element:<CSDDashboard/>},
  {path:"/profilecreation",element:<ProfileCreation/>}
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

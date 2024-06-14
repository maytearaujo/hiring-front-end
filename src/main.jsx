import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  } from "react-router-dom";
  
import App from './App.jsx'
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import Home from './Home/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ]
  },
  // {
  //   path: "/",
  //   element: <ErrorPage />
  // },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

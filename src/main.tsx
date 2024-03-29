import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate, RouterProvider } from 'react-router-dom'
import { router } from './router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

const notFoundPath = sessionStorage.getItem("targetPath")
if(notFoundPath){
  <Navigate to={notFoundPath} />
}

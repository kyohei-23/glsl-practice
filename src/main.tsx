import React from 'react'
import ReactDOM from 'react-dom/client'
import { useNavigate, RouterProvider } from 'react-router-dom'
import { router } from './router'
import './index.css'

const navigate = useNavigate()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

const notFoundPath = sessionStorage.getItem("targetPath")
if(notFoundPath){
  navigate(notFoundPath, {
    replace: true
  })
}

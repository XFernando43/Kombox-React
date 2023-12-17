import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './input.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import IndexComponent from './components/pages/IndexComponent.jsx'
import ErrorComponent from './components/shared/ErrorComponent.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<IndexComponent></IndexComponent>,
    errorElement:<ErrorComponent/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

import React  from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import About from './pages/about/About.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/sobre",
    element: <About />
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

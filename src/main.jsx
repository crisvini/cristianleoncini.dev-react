import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from './routes/ErrorPage.jsx'
import HomePage from './routes/HomePage.jsx'
import ContatoPage from './routes/ContatoPage.jsx'

const idioma = 'enUS'
// const idioma = 'ptBR'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App idioma={idioma} />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage idioma={idioma} />
      },
      {
        path: '/contato',
        element: <ContatoPage idioma={idioma} />
      },
      {
        path: '/contact',
        element: <ContatoPage idioma={idioma} />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

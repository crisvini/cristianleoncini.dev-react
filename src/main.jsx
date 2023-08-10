import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from './routes/ErrorPage.jsx'
import HomePage from './routes/HomePage.jsx'
import ContatoPage from './routes/ContatoPage.jsx'

import { IdiomaContextProvider } from './context/IdiomaContext'

const router = createBrowserRouter([
  {
    path: '/cristianleoncini.dev-react',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/cristianleoncini.dev-react',
        element: <HomePage />
      },
      {
        path: '/contato',
        element: <ContatoPage />
      },
      {
        path: '/contact',
        element: <ContatoPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <IdiomaContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </IdiomaContextProvider>
)

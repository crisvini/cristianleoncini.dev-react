import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import { Outlet } from 'react-router-dom'

import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App

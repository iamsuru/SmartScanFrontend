import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import NavigationBar from './components/NavigationBar'
import Login from './components/Login'
import Signup from './components/Signup'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Form } from './components/Form'
import MobileUploader from './components/MobileUploader'
function App() {
  const location = useLocation()

  const showNavigationBar = () => {
    return location.pathname !== '/upload'
  }
  return (
    <div className='bg-img'>
      {showNavigationBar() && <NavigationBar />}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/form' element={<Form />} />
        <Route path='/upload' element={<MobileUploader />} />
      </Routes>
    </div>
  )
}

export default App
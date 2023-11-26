import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import NavigationBar from './components/NavigationBar'
import Login from './components/Login'
import Signup from './components/Signup'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className='bg-img'>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>

      {/* <Login />
      <Signup /> */}
    </div>
  )
}

export default App
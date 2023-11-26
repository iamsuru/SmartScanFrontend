import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import NavigationBar from './components/NavigationBar'
import Login from './components/Login'
import Signup from './components/Signup'
import { Route, Routes } from 'react-router-dom'
import Form from './components/Form'
function App() {
  return (
    <div className='bg-img'>
      <NavigationBar />
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/form' element={<Form />} />
      </Routes>
    </div>
  )
}

export default App
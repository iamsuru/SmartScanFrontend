import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import NavigationBar from './components/NavigationBar'
import Login from './components/Login'
function App() {
  return (
    <div className='bg-img'>
      <NavigationBar/>
      <Login/>
    </div>
  )
}

export default App
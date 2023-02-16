import React from 'react'
import "../App.css"
import { BrowserRouter, Link, Route, Routes ,  } from 'react-router-dom'
import Signup from '../components/Signup'
import Login from '../components/Login'
import Home from '../components/Home'
function AppRouter() {
  return (
    <div>
        <BrowserRouter>
        <nav>
              
      
        </nav>

        <Routes>
            <Route path='/' element={<Signup/>}/>
            <Route path='login' element={<Login/>}/>
              <Route path='/home' element={<Home/>}/>
              </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter;
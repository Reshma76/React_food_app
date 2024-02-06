import React from 'react'
import Nav from './Nav'
import "./global.css"
import {BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login'
import Signup from './components/Signup';
import Order from './components/Order'
import Food from './components/Food'
import Update from './components/Update';

const App = () => {
  return (
    <Router>
      <Nav/>
      <ToastContainer />
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/order' element={<Order/>} />
        <Route path='/food' element={<Food/>} />
        <Route path='/update/:id' element={<Update/>} />
      </Routes>
    </Router>
  )
}

export default App
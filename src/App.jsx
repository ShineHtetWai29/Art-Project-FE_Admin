import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard'
import Dashboard from './pages/User/Dashboard'
import Profile from './pages/Dashboard/Profile'
import Category from './pages/Category/Category'
import User from './pages/User/User'
import Picture from './pages/Picture/Picture'
import Favourite from './pages/Favourite/Favourite'
import Feedback from './pages/Feedback/Feedback'
import Payment from './pages/Payment/Payment'
import CategoryForm from './pages/Category/CategoryForm'
import Login from './pages/Login/Login'

function App() {


  return (
    <>
   
    <BrowserRouter>
    <div className="grid grid-cols-5">
          <div className="col-span-1">
           {/* <AdminDashboard/> */}

          </div>
          <div className="col-span-4 ">
            <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/adminprofile" element={<Profile/>} />
              <Route path='/user' element={<User/>} />
              <Route path='/category' element={<Category/>} />
              <Route path='/categoryForm' element={<CategoryForm/>} />
              <Route path='/card' element={<Picture/>}/>
              <Route path='/favourite' element={<Favourite/>} />
              <Route path='/feedback' element={<Feedback/>}/>
              <Route path='/payment' element={<Payment/>}/>
              
              </Routes>
          </div>
          </div>
    </BrowserRouter>
    </>
  )
}

export default App

import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router'
import { Home, About, Contact, Doctors, Appointment,
   Login, MyAppointment, Myprofile, PageNotFound } from './pages'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <div className='mx-4 sm:mx-[10%]'>
    <Navbar/>
   <Routes>
    <Route path='/' element={<Home />} /> 
    <Route path='/doctors' element={<Doctors />} />
    <Route path='/doctors/:speciality' element={<Doctors />} />
    <Route path='/appointment/:docId' element={<Appointment />} />
    <Route path='/my-appointments' element={<MyAppointment/>} />
    <Route path='/my-profile' element={<Myprofile/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='*' element={<PageNotFound/>} />
  </Routes>

  <Footer/>

  </div>
  )
}

export default App

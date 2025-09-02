import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router'
import { Home, About, Contact, Doctors, Appointment,
   Login, MyAppointment, Myprofile, PageNotFound } from './pages'

function App() {
  

  return (
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
  )
}

export default App

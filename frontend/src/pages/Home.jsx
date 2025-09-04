import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import Doctors from './Doctors'
import Appointment from './Appointment'
import Login from './Login'
import Myprofile from './Myprofile'
import MyAppointment from './MyAppointment'

const Home = () => {
  return (
    <div>
      <Header/>
     <SpecialityMenu/>
     <TopDoctors/>
     <Banner/>

    </div>
  )
}

export default Home
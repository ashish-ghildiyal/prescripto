import React, { useContext } from 'react'
import RelatedDoctors from '../components/RelatedDoctors'
import { useParams } from 'react-router'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Appointment = () => {
  const {doctors} = useContext(AppContext);
  const {docId} = useParams();
  const doctor = doctors?.find(doc => doc._id === docId);
  const {name, speciality, image, degree, experience, about, fees} = doctor || {};
  console.log(doctor);

  return (
    <div>
  <div className="flex flex-col sm:flex-row gap-4">
    <div>
      <img
        className="bg-primary w-full sm:max-w-72 rounded-lg"
        src={image}
        alt={name}
      />
    </div>
    <div className="flex-1 border border-[#ADADAD] rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
      <p className="flex items-center gap-2 text-3xl font-medium text-gray-700">
       {name}{" "}
        <img
          className="w-5"
          src={assets.verified_icon}
          alt=""
        />
      </p>
      <div className="flex items-center gap-2 mt-1 text-gray-600">
        <p>{degree} - {speciality}</p>
        <button className="py-0.5 px-2 border text-xs rounded-full">
          {experience} 
        </button>
      </div>
      <div>
        <p className="flex items-center gap-1 text-sm font-medium text-[#262626] mt-3">
          About{" "}
          <img
            className="w-3"
            src="data:image/svg+xml,%3csvg%20width='17'%20height='17'%20viewBox='0%200%2017%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.5%200C3.80559%200%200%203.80554%200%208.5C0%2013.1944%203.80559%2017%208.5%2017C13.1945%2017%2017%2013.1944%2017%208.5C17%203.80554%2013.1945%200%208.5%200ZM8.5%2015.3C4.75049%2015.3%201.7%2012.2495%201.7%208.5C1.7%204.75049%204.75049%201.7%208.5%201.7C12.2496%201.7%2015.3%204.75049%2015.3%208.5C15.3%2012.2495%2012.2496%2015.3%208.5%2015.3ZM9.56436%205.1C9.56436%205.71628%209.11565%206.1625%208.50864%206.1625C7.87706%206.1625%207.43936%205.71628%207.43936%205.08821C7.43936%204.48456%207.88891%204.0375%208.50864%204.0375C9.11565%204.0375%209.56436%204.48456%209.56436%205.1ZM7.65186%207.65H9.35186V12.75H7.65186V7.65Z'%20fill='black'/%3e%3c/svg%3e"
            alt=""
          />
        </p>
        <p className="text-sm text-gray-600 max-w-[700px] mt-1">
          {about}
        </p>
      </div>
      <p className="text-gray-600 font-medium mt-4">
        Appointment fee: <span className="text-gray-800">${fees}</span>{" "}
      </p>
    </div>
  </div>
  <div className="sm:ml-72 sm:pl-4 mt-8 font-medium text-[#565656]">
    <p>Booking slots</p>
    <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
      <div className="text-center py-6 min-w-16 rounded-full cursor-pointer bg-primary text-white">
        <p>WED</p>
        <p>3</p>
      </div>
      <div className="text-center py-6 min-w-16 rounded-full cursor-pointer border border-[#DDDDDD]">
        <p>THU</p>
        <p>4</p>
      </div>
      <div className="text-center py-6 min-w-16 rounded-full cursor-pointer border border-[#DDDDDD]">
        <p>FRI</p>
        <p>5</p>
      </div>
      <div className="text-center py-6 min-w-16 rounded-full cursor-pointer border border-[#DDDDDD]">
        <p>SAT</p>
        <p>6</p>
      </div>
      <div className="text-center py-6 min-w-16 rounded-full cursor-pointer border border-[#DDDDDD]">
        <p>SUN</p>
        <p>7</p>
      </div>
      <div className="text-center py-6 min-w-16 rounded-full cursor-pointer border border-[#DDDDDD]">
        <p>MON</p>
        <p>8</p>
      </div>
      <div className="text-center py-6 min-w-16 rounded-full cursor-pointer border border-[#DDDDDD]">
        <p>TUE</p>
        <p>9</p>
      </div>
    </div>
    <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
      <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
        12:00
      </p>
      <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
        12:30
      </p>
      <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
        13:00
      </p>
      <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
        13:30
      </p>
      <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
        14:00
      </p>
      <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
        14:30
      </p>
      <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
        15:00
      </p>
      <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
        15:30
      </p>
      <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
        16:00
      </p>
      <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
        16:30
      </p>
      <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
        17:00
      </p>
      <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
        17:30
      </p>
      <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
        18:00
      </p>
      <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
        18:30
      </p>
      <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
        19:00
      </p>
      <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
        19:30
      </p>
      <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
        20:00
      </p>
      <p className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
        20:30
      </p>
    </div>
    <button className="bg-primary text-white text-sm font-light px-20 py-3 rounded-full my-6">
      Book an appointment
    </button>
  </div>
  <RelatedDoctors />
</div>

  )
}

export default Appointment
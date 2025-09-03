import React, { use, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router'



const TopDoctors = () => {
    const {doctors} = useContext(AppContext)
    const Navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10">
  <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
  <p className="sm:w-1/3 text-center text-sm">
    Simply browse through our extensive list of trusted doctors.
  </p>
  <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
    {doctors?.slice(0,10).map((doctor) => {
        const {_id, name, speciality, image} = doctor;
        return (
    <div className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
    key={_id}
    onClick={()=>Navigate(`/appointment/${_id}`)}
    >
      <img
        className="bg-[#EAEFFF]"
        src={image} 
        alt={name}
      />
      <div className="p-4">
        <div className="flex items-center gap-2 text-sm text-center text-green-500">
          <p className="w-2 h-2 rounded-full bg-green-500" />
          <p>Available</p>
        </div>
        <p className="text-[#262626] text-lg font-medium">{name}</p>
        <p className="text-[#5C5C5C] text-sm">{speciality}</p>
      </div>
    </div>
        )

    })}
   
  </div>
  <button className="bg-[#EAEFFF] text-gray-600 px-12 py-3 rounded-full mt-10 cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
  onClick={()=>Navigate('/doctors')}
  >
    See
    more
  </button>
</div>

  )
}

export default TopDoctors
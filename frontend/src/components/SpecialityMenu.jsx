import React from 'react'
import { specialityData } from '../assets/assets'

const SpecialityMenu = () => {
  return (
    <div
  id="speciality"
  className="flex flex-col items-center gap-4 py-16 text-[#262626]"
>
  <h1 className="text-3xl font-medium">Find by Speciality</h1>
  <p className="sm:w-1/3 text-center text-sm">
    Simply browse through our extensive list of trusted doctors, schedule your
    appointment hassle-free.
  </p>
  <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll ">
    <a
      className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
      href="/doctors/General physician"
    >
      <img
        className="w-16 sm:w-24 mb-2 "
        src={specialityData[0]?.image}
        alt=""
      />
      <p>General physician</p>
    </a>
    <a
      className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
      href="/doctors/Gynecologist"
    >
      <img
        className="w-16 sm:w-24 mb-2 "
        src={specialityData[1]?.image}
        alt=""
      />
      <p>Gynecologist</p>
    </a>
    <a
      className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
      href="/doctors/Dermatologist"
    >
      <img
        className="w-16 sm:w-24 mb-2 "
        src={specialityData[2]?.image}
        alt=""
      />
      <p>Dermatologist</p>
    </a>
    <a
      className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
      href="/doctors/Pediatricians"
    >
      <img
        className="w-16 sm:w-24 mb-2 "
        src={specialityData[3]?.image}
        alt=""
      />
      <p>Pediatricians</p>
    </a>
    <a
      className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
      href="/doctors/Neurologist"
    >
      <img
        className="w-16 sm:w-24 mb-2 "
        src={specialityData[4]?.image}
        alt=""
      />
      <p>Neurologist</p>
    </a>
    <a
      className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
      href="/doctors/Gastroenterologist"
    >
      <img
        className="w-16 sm:w-24 mb-2 "
        src={specialityData[5]?.image}
        alt=""
      />
      <p>Gastroenterologist</p>
    </a>
  </div>
</div>

  )
}

export default SpecialityMenu
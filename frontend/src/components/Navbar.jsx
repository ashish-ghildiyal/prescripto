import React from 'react'
import {assets} from '../assets/assets.js'
import {NavLink,  } from 'react-router'

const Navbar = () => {

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD]">
  <img className="w-44 cursor-pointer" src={assets?.logo} alt={"${assets.logo}"}/>
  <ul className="md:flex items-start gap-5 font-medium hidden">
    <NavLink to="/">
      <li className="py-1">HOME</li>
      <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
   </NavLink>
   <NavLink to="/doctors">
      <li className="py-1">ALL DOCTORS</li>
      <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
    </NavLink>
    <NavLink to="/about">
      <li className="py-1">ABOUT</li>
      <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
    </NavLink>
    <NavLink to="/contact">
      <li className="py-1">CONTACT</li>
      <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
    </NavLink>
    {/* <a
      target="_blank"
      href="https://prescripto-admin.vercel.app/"
      className="border px-5 text-xs py-1.5 rounded-full"
    >
      Admin Panel
    </a> */}
  </ul>
  <div className="flex items-center gap-4 ">
    <button className="bg-primary text-white px-8 py-3 rounded-full font-light  md:block">
      Create account
    </button>
    <img
      className="w-6 md:hidden"
      src="data:image/svg+xml,%3csvg%20width='37'%20height='27'%20viewBox='0%200%2037%2027'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='17'%20y='24'%20width='20'%20height='3'%20rx='1.5'%20fill='%23000B6D'/%3e%3crect%20x='7'%20y='12'%20width='30'%20height='3'%20rx='1.5'%20fill='%23000B6D'/%3e%3crect%20width='37'%20height='3'%20rx='1.5'%20fill='%23000B6D'/%3e%3c/svg%3e"
      alt=""
    />
    <div className="md:hidden h-0 w-0 right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all">
      <div className="flex items-center justify-between px-5 py-6">
        <img src={assets?.logo} className="w-36" alt="" />
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZ0lEQVR4nO3cy27TQBSA4RPKRT6T9iG4qUW8CEgUWHQB7Chh0cwE3iAPCuIiqOAlsNG4GFqpFnGaNudk/k+aXRY5+jXjyI4sAgAAAAAAAAAAAAAA1mB+XXaO7sr29L6IjMSt+TUZx912ljyTSyG9khC/S0jNn/VFqvhMvKlmzyXEr//miN8kTF+KvxipPhWjW7VonIgXGie9c4T4QpwYSUjH5wzhK4r2xujWsY9jOF8v+ofwEUX/G+Nkbc/uiXk76c4CQexG0QVj5HXr/W1xYCQaP7qMogNiaPrg48jKdPZYQvzlKooOiJFn0/hIXNH0elCUcTxa33eNh26+68ZH0VJieIiipcWwHEVLjWExipYew1IUJYadKEoMO1GUGHaiKDHsRFFi2ImixLATRYlhJ4oSw04UJYadKEoMO1GUGIYeGKV60GctPBArYKc0a7s/VhRdWRRiGIpSszPsRKmJYSdKTYzLpIN+2hLEWIyGKPZiNESxF6Mhir0YDVEuHmPCrRMrdIkbhRb+YrSR9AJ3bYliKEaHKCuyyucZyvFlJ0aHKEu6zCd9yk6xE6NDlAVd5TNwZafYidEhSo91/jtE2Sl2YnSIYihGp/golmJI6VEsxig2iuUYxUXxEKOYKFV6uvEvn6mm++LDwVb7fkVPMZaL8rmd1bz89k7PW18HHF8u3igXZg/dxhgaZfxuT+yb3xSNP90cU8sfXz/aWV3Q9Kb3YughxpkoPTsl7yJXcpSzO+WTVOmJeFNN99sL+Omd4S7GX29vyDg9OHnVuIdfJH0OttoZ8ix5JgAAAAAAAAAAAAAAIFftNzm+PJEnw4B9AAAAAElFTkSuQmCC"
          className="w-7"
          alt=""
        />
      </div>
      <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
        <a aria-current="page" className="active" href="/">
          <p className="px-4 py-2 rounded full inline-block">HOME</p>
        </a>
        <a className="" href="/doctors">
          <p className="px-4 py-2 rounded full inline-block">ALL DOCTORS</p>
        </a>
        <a className="" href="/about">
          <p className="px-4 py-2 rounded full inline-block">ABOUT</p>
        </a>
        <a className="" href="/contact">
          <p className="px-4 py-2 rounded full inline-block">CONTACT</p>
        </a>
      </ul>
    </div>
  </div>
</div>

  )
}

export default Navbar
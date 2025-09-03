import React from 'react'

const MyAppointment = () => {
  return (
    <div>
  <p className="pb-3 mt-12 text-lg font-medium text-gray-600 border-b">
    My appointments
  </p>
  <div className="">
    <div className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b">
      <div>
        <img
          className="w-36 bg-[#EAEFFF]"
          src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc1.png"
          alt=""
        />
      </div>
      <div className="flex-1 text-sm text-[#5E5E5E]">
        <p className="text-[#262626] text-base font-semibold">
          Dr. Richard James
        </p>
        <p>General physician</p>
        <p className="text-[#464646] font-medium mt-1">Address:</p>
        <p className="">24 main street</p>
        <p className="">10 clause road</p>
        <p className=" mt-1">
          <span className="text-sm text-[#3C3C3C] font-medium">
            Date &amp; Time:
          </span>{" "}
          3 Oct 2025 | 13:30
        </p>
      </div>
      <div />
      <div className="flex flex-col gap-2 justify-end text-sm text-center">
        <button className="text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300">
          Pay Online
        </button>
        <button className="text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300">
          Cancel appointment
        </button>
      </div>
    </div>
  </div>
</div>

  )
}

export default MyAppointment
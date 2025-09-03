import React from 'react'

const Doctors = () => {
  return (
    <div>
  <p className="text-gray-600">Browse through the doctors specialist.</p>
  <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
    <button className="py-1 px-3 border rounded text-sm  transition-all sm:hidden ">
      Filters
    </button>
    <div className="flex-col gap-4 text-sm text-gray-600 hidden sm:flex">
      <p className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ">
        General physician
      </p>
      <p className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ">
        Gynecologist
      </p>
      <p className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ">
        Dermatologist
      </p>
      <p className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ">
        Pediatricians
      </p>
      <p className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ">
        Neurologist
      </p>
      <p className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ">
        Gastroenterologist
      </p>
    </div>
    <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
      <div className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
        <img
          className="bg-[#EAEFFF]"
          src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc1.png"
          alt=""
        />
        <div className="p-4">
          <div className="flex items-center gap-2 text-sm text-center text-green-500">
            <p className="w-2 h-2 rounded-full bg-green-500" />
            <p>Available</p>
          </div>
          <p className="text-[#262626] text-lg font-medium">
            Dr. Richard James
          </p>
          <p className="text-[#5C5C5C] text-sm">General physician</p>
        </div>
      </div>
      <div className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
        <img
          className="bg-[#EAEFFF]"
          src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc2.png"
          alt=""
        />
        <div className="p-4">
          <div className="flex items-center gap-2 text-sm text-center text-green-500">
            <p className="w-2 h-2 rounded-full bg-green-500" />
            <p>Available</p>
          </div>
          <p className="text-[#262626] text-lg font-medium">Dr. Emily Larson</p>
          <p className="text-[#5C5C5C] text-sm">Gynecologist</p>
        </div>
      </div>
      <div className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
        <img
          className="bg-[#EAEFFF]"
          src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc3.png"
          alt=""
        />
        <div className="p-4">
          <div className="flex items-center gap-2 text-sm text-center text-green-500">
            <p className="w-2 h-2 rounded-full bg-green-500" />
            <p>Available</p>
          </div>
          <p className="text-[#262626] text-lg font-medium">Dr. Sarah Patel</p>
          <p className="text-[#5C5C5C] text-sm">Dermatologist</p>
        </div>
      </div>
      <div className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
        <img
          className="bg-[#EAEFFF]"
          src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc4.png"
          alt=""
        />
        <div className="p-4">
          <div className="flex items-center gap-2 text-sm text-center text-green-500">
            <p className="w-2 h-2 rounded-full bg-green-500" />
            <p>Available</p>
          </div>
          <p className="text-[#262626] text-lg font-medium">
            Dr. Christopher Lee
          </p>
          <p className="text-[#5C5C5C] text-sm">Pediatricians</p>
        </div>
      </div>
      <div className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
        <img
          className="bg-[#EAEFFF]"
          src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc5.png"
          alt=""
        />
        <div className="p-4">
          <div className="flex items-center gap-2 text-sm text-center text-green-500">
            <p className="w-2 h-2 rounded-full bg-green-500" />
            <p>Available</p>
          </div>
          <p className="text-[#262626] text-lg font-medium">
            Dr. Jennifer Garcia
          </p>
          <p className="text-[#5C5C5C] text-sm">Neurologist</p>
        </div>
      </div>
      <div className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
        <img
          className="bg-[#EAEFFF]"
          src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc6.png"
          alt=""
        />
        <div className="p-4">
          <div className="flex items-center gap-2 text-sm text-center text-green-500">
            <p className="w-2 h-2 rounded-full bg-green-500" />
            <p>Available</p>
          </div>
          <p className="text-[#262626] text-lg font-medium">
            Dr. Andrew Williams
          </p>
          <p className="text-[#5C5C5C] text-sm">Gastroenterologist</p>
        </div>
      </div>
      <div className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
        <img
          className="bg-[#EAEFFF]"
          src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc7.png"
          alt=""
        />
        <div className="p-4">
          <div className="flex items-center gap-2 text-sm text-center text-green-500">
            <p className="w-2 h-2 rounded-full bg-green-500" />
            <p>Available</p>
          </div>
          <p className="text-[#262626] text-lg font-medium">
            Dr. Christopher Davis
          </p>
          <p className="text-[#5C5C5C] text-sm">General physician</p>
        </div>
      </div>
      <div className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
        <img
          className="bg-[#EAEFFF]"
          src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc8.png"
          alt=""
        />
        <div className="p-4">
          <div className="flex items-center gap-2 text-sm text-center text-green-500">
            <p className="w-2 h-2 rounded-full bg-green-500" />
            <p>Available</p>
          </div>
          <p className="text-[#262626] text-lg font-medium">
            Dr. Timothy White
          </p>
          <p className="text-[#5C5C5C] text-sm">Gynecologist</p>
        </div>
      </div>
      <div className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
        <img
          className="bg-[#EAEFFF]"
          src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc9.png"
          alt=""
        />
        <div className="p-4">
          <div className="flex items-center gap-2 text-sm text-center text-green-500">
            <p className="w-2 h-2 rounded-full bg-green-500" />
            <p>Available</p>
          </div>
          <p className="text-[#262626] text-lg font-medium">Dr. Ava Mitchell</p>
          <p className="text-[#5C5C5C] text-sm">Dermatologist</p>
        </div>
      </div>
      <div className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
        <img
          className="bg-[#EAEFFF]"
          src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc10.png"
          alt=""
        />
        <div className="p-4">
          <div className="flex items-center gap-2 text-sm text-center text-green-500">
            <p className="w-2 h-2 rounded-full bg-green-500" />
            <p>Available</p>
          </div>
          <p className="text-[#262626] text-lg font-medium">Dr. Jeffrey King</p>
          <p className="text-[#5C5C5C] text-sm">Pediatricians</p>
        </div>
      </div>
      <div className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
        <img
          className="bg-[#EAEFFF]"
          src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc11.png"
          alt=""
        />
        <div className="p-4">
          <div className="flex items-center gap-2 text-sm text-center text-green-500">
            <p className="w-2 h-2 rounded-full bg-green-500" />
            <p>Available</p>
          </div>
          <p className="text-[#262626] text-lg font-medium">Dr. Zoe Kelly</p>
          <p className="text-[#5C5C5C] text-sm">Neurologist</p>
        </div>
      </div>
      <div className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
        <img
          className="bg-[#EAEFFF]"
          src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc12.png"
          alt=""
        />
        <div className="p-4">
          <div className="flex items-center gap-2 text-sm text-center text-green-500">
            <p className="w-2 h-2 rounded-full bg-green-500" />
            <p>Available</p>
          </div>
          <p className="text-[#262626] text-lg font-medium">
            Dr. Patrick Harris
          </p>
          <p className="text-[#5C5C5C] text-sm">Gastroenterologist</p>
        </div>
      </div>
      <div className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
        <img
          className="bg-[#EAEFFF]"
          src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc13.png"
          alt=""
        />
        <div className="p-4">
          <div className="flex items-center gap-2 text-sm text-center text-green-500">
            <p className="w-2 h-2 rounded-full bg-green-500" />
            <p>Available</p>
          </div>
          <p className="text-[#262626] text-lg font-medium">Dr. Chloe Evans</p>
          <p className="text-[#5C5C5C] text-sm">General physician</p>
        </div>
      </div>
      <div className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
        <img
          className="bg-[#EAEFFF]"
          src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc14.png"
          alt=""
        />
        <div className="p-4">
          <div className="flex items-center gap-2 text-sm text-center text-green-500">
            <p className="w-2 h-2 rounded-full bg-green-500" />
            <p>Available</p>
          </div>
          <p className="text-[#262626] text-lg font-medium">
            Dr. Ryan Martinez
          </p>
          <p className="text-[#5C5C5C] text-sm">Gynecologist</p>
        </div>
      </div>
      <div className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
        <img
          className="bg-[#EAEFFF]"
          src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc15.png"
          alt=""
        />
        <div className="p-4">
          <div className="flex items-center gap-2 text-sm text-center text-green-500">
            <p className="w-2 h-2 rounded-full bg-green-500" />
            <p>Available</p>
          </div>
          <p className="text-[#262626] text-lg font-medium">Dr. Amelia Hill</p>
          <p className="text-[#5C5C5C] text-sm">Dermatologist</p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Doctors
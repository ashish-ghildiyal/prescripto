import React,{useContext, useEffect, useState} from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router'


const Doctors = () => {
  const {speciality} = useParams();
  const Navigate = useNavigate();
  console.log(speciality);
 
  const [filterDoc, setFilterDoc] = useState([]);

  const {doctors} = useContext(AppContext);

  // get unique specialities from doctors array
  const specialities = ["All", ...new Set(doctors?.map(doc => doc.speciality))];

  // Filter doctors based on speciality
   const applyFilter = () => {
    if(speciality !== 'All' && speciality) {
      const filteredData = doctors?.filter((doc) => doc.speciality === speciality);
      console.log('filteredData:', filteredData);
      setFilterDoc(filteredData);
    } else {
      setFilterDoc(doctors);
    }
  }

  useEffect(() => {
    applyFilter();
  }, [speciality]);


  return (
    <div>
  <p className="text-gray-600">Browse through the doctors specialist.</p>
  <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
    <button className="py-1 px-3 border rounded text-sm  transition-all sm:hidden ">
      Filters
    </button>
    
    <div className="flex-col gap-4 text-sm text-gray-600 hidden sm:flex">
     
      { specialities.map((spec, index) => (
        
      <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 
      rounded transition-all cursor-pointer ${spec === speciality ? 'bg-primary text-white' : 'hover:shadow-md' }`}
       key={index}
       onClick={()=>spec === speciality ? Navigate('/doctors') : Navigate(`/doctors/${spec}`)}
       >
        {spec}
      </p>))}
     
    </div>
    <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
      {
        filterDoc?.map((doctor) => {
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
          <p className="text-[#262626] text-lg font-medium">
            {name}
          </p>
          <p className="text-[#5C5C5C] text-sm">{speciality}</p>
        </div>
      </div>
        ) })
      }
    </div>
  </div>
</div>

  )
}

export default Doctors
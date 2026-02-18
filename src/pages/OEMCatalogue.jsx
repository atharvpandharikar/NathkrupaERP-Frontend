import React from 'react';
import { Link } from 'react-router-dom';

const OEMCatalogue = () => {
  const carMakers = [
    { name: 'Toyota', initial: 'T' },
    { name: 'Honda', initial: 'H' },
    { name: 'Ford', initial: 'F' },
    { name: 'Chevrolet', initial: 'C' },
    { name: 'Nissan', initial: 'N' },
    { name: 'BMW', initial: 'B' },
    { name: 'Mercedes-Benz', initial: 'M' },
    { name: 'Audi', initial: 'A' },
    { name: 'Volkswagen', initial: 'V' },
    { name: 'Hyundai', initial: 'H' }
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-10 py-16">
      <div className="mb-12">
        <h1 className="text-[42px] font-serif font-bold text-[#111827] mb-2 leading-tight">
          OEM Catalogue
        </h1>
        <p className="text-lg text-gray-500 font-medium">Browse by car maker.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {carMakers.map((maker, index) => (
          <Link 
            key={index}
            to={`/oem-catalogue/${maker.name.toLowerCase()}`}
            className="group cursor-pointer bg-white border border-gray-100 rounded-[24px] p-6 hover:border-[#f47a4d]/60 hover:shadow-2xl hover:shadow-orange-100/50 transition-all duration-500"
          >
            <div className="aspect-square bg-gray-50 group-hover:bg-[#fff1ed] rounded-[16px] mb-6 flex items-center justify-center transition-colors duration-500">
               <span className="text-[48px] font-serif font-black text-gray-900 group-hover:scale-110 transition-transform duration-500">
                {maker.initial}
               </span>
            </div>
            
            <h3 className="text-[17px] font-black text-[#111827] group-hover:text-[#f47a4d] mb-1 transition-colors duration-300">
              {maker.name}
            </h3>
            <div className="text-[13px] font-bold text-gray-400 flex items-center">
              View Parts <span className="ml-1 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1">&rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OEMCatalogue;

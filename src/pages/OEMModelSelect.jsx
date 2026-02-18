import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Search, Car } from 'lucide-react';

const OEMModelSelect = () => {
  const { makerId } = useParams();
  const [filter, setFilter] = useState('');
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedModification, setSelectedModification] = useState(null);

  const makerName = (makerId || 'TOYOTA').toUpperCase();

  const models = [
    { name: `${makerName} CAMRY` },
    { name: `${makerName} COROLLA` },
    { name: `${makerName} RAV4` },
    { name: `${makerName} HIGHLANDER` },
    { name: `${makerName} PRIUS` },
    { name: `${makerName} TACOMA` },
    { name: `${makerName} TUNDRA` },
    { name: `${makerName} SIENNA` },
  ];

  const years = ['2018', '2019', '2020', '2021', '2022', '2023', '2024'];

  const modifications = [
    { title: 'LE', details: 'Automatic / 2.5L / Petrol / 2022 - now' },
    { title: 'SE', details: 'Automatic / 2.5L / Petrol / 2022 - now' },
    { title: 'XLE', details: 'Automatic / 2.5L / Petrol / 2022 - now' },
    { title: 'XSE', details: 'Automatic / 2.5L / Petrol / 2022 - now' },
    { title: 'Limited', details: 'Automatic / 3.5L / Petrol / 2022 - now' },
    { title: 'TRD Sport', details: 'Automatic / 3.5L / Petrol / 2022 - now' },
    { title: 'Hybrid LE', details: 'CVT / 2.5L / Hybrid / 2022 - now' },
    { title: 'Hybrid XLE', details: 'CVT / 2.5L / Hybrid / 2022 - now' },
  ];

  const vehicleVariants = [
    { model: 'CAMRY LE 2.5L', year: '2024', engine: '2.5 L', power: '203 h.p.', fuel: 'Petrol' },
    { model: 'CAMRY SE 2.5L', year: '2024', engine: '2.5 L', power: '203 h.p.', fuel: 'Petrol' },
  ];

  const filteredModels = models.filter(m => 
    m.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen font-sans pb-20">
      {/* Breadcrumbs */}
      <div className="border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-4 flex items-center space-x-2 text-[12px] md:text-[13px] text-gray-400 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
          <span>&rsaquo;</span>
          <Link to="/oem-catalogue" className="hover:text-purple-600 transition-colors">Car Makers</Link>
          <span>&rsaquo;</span>
          <span className="text-gray-600 font-medium">{makerName} spare parts and accessories</span>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-8 md:py-12">
        {/* Step-by-Step Selection Content */}
        {!selectedModification && (
          <>
            {/* Current Navigation Logic */}
            <h1 className="text-3xl md:text-[52px] font-black text-[#7c3aed] mb-6 md:mb-8 tracking-tighter uppercase leading-tight">
              {makerName}
            </h1>

            <p className="text-[#6b7280] text-sm md:text-[16px] leading-relaxed md:leading-[1.6] max-w-[900px] mb-8 md:mb-10 font-medium">
              {makerName === 'TOYOTA' ? (
                "Toyota Motor Corporation is a Japanese multinational automotive manufacturer headquartered in Toyota City, Aichi, Japan. Founded in 1937, Toyota is one of the world's largest automobile manufacturers by production and the leader in hybrid electric vehicle development. The company is renowned for its commitment to quality, reliability, and innovation, particularly in areas of safety, fuel efficiency, and environmentally friendly technologies."
              ) : (
                `Browse the full range of genuine ${makerName} parts and accessories. Our catalogue provides high-quality components specifically designed for your vehicle, ensuring optimal performance, safety, and longevity.`
              )}
            </p>

            <Link 
              to="/oem-catalogue"
              className="inline-block px-8 md:px-10 py-3.5 md:py-4 border-2 border-[#7c3aed] text-[#7c3aed] rounded-[12px] font-black text-sm md:text-[15px] hover:bg-[#7c3aed] hover:text-white transition-all duration-300 mb-12 md:mb-20 w-full md:w-auto text-center"
            >
              View OEM Catalogue
            </Link>
          </>
        )}

        {!selectedModel ? (
          <>
            {/* Search and Grid Section (Model) */}
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl md:text-[32px] font-serif font-bold text-[#111827]">
                  Choose Your <span className="text-[#7c3aed]">Model</span>
                </h2>
                <p className="text-gray-400 text-xs md:text-sm font-bold mt-2">
                  Select the required line of vehicle ({filteredModels.length})
                </p>
              </div>

              <div className="w-full md:w-[320px] relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                <input 
                  type="text" 
                  placeholder="Filter Model"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-[12px] pl-11 pr-4 py-3.5 focus:outline-none focus:border-purple-300 transition-all text-sm font-medium"
                />
              </div>
            </div>

            {/* Model Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredModels.map((model, index) => (
                <div 
                  key={index} 
                  onClick={() => setSelectedModel(model)}
                  className="group cursor-pointer bg-white border border-gray-100 rounded-[20px] p-5 md:p-6 hover:shadow-xl transition-all duration-300 flex flex-col items-center"
                >
                  <div className="w-full aspect-[4/3] bg-[#f9fafb] rounded-[16px] mb-4 md:mb-6 flex items-center justify-center group-hover:bg-gray-50 transition-colors">
                     <Car className="w-12 h-12 md:w-16 md:h-16 text-gray-200 group-hover:text-purple-100 transition-colors stroke-[1.5]" />
                  </div>
                  <h3 className="text-[12px] md:text-[13px] font-black text-[#111827] text-center tracking-tight uppercase">
                    {model.name}
                  </h3>
                </div>
              ))}
            </div>
          </>
        ) : !selectedYear ? (
          <>
            {/* Back Button to Models */}
            <button 
              onClick={() => setSelectedModel(null)}
              className="text-[#7c3aed] text-xs md:text-sm font-bold flex items-center mb-8 md:mb-10 hover:underline"
            >
              <span className="mr-2 text-base md:text-lg">←</span> Back to Models
            </button>

            {/* Header Section (Year) */}
            <div className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-[32px] font-serif font-bold text-[#111827]">
                Choose Your <span className="text-[#7c3aed]">Year</span>
              </h2>
              <p className="text-gray-400 text-xs md:text-sm font-bold mt-2">
                Select the required year of vehicle ({years.length})
              </p>
            </div>

            {/* Year Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {years.map((year) => (
                <div 
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className="cursor-pointer bg-white border border-gray-100 rounded-[20px] h-[100px] md:h-[120px] flex items-center justify-center hover:shadow-xl hover:border-purple-100 transition-all duration-300"
                >
                  <span className="text-2xl md:text-[28px] font-black text-[#111827]">{year}</span>
                </div>
              ))}
            </div>
          </>
        ) : !selectedModification ? (
          <>
            {/* Back Button to Years */}
            <button 
              onClick={() => setSelectedYear(null)}
              className="text-[#7c3aed] text-xs md:text-sm font-bold flex items-center mb-8 md:mb-10 hover:underline"
            >
              <span className="mr-2 text-base md:text-lg">←</span> Back to Years
            </button>

            {/* Header Section (Modification) */}
            <div className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-[32px] font-serif font-bold text-[#111827]">
                Choose Your <span className="text-[#7c3aed]">Modification</span>
              </h2>
              <p className="text-gray-400 text-xs md:text-sm font-bold mt-2">
                Select the required modification of vehicle ({modifications.length})
              </p>
            </div>

            {/* Modification Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {modifications.map((mod, index) => (
                <div 
                  key={index} 
                  onClick={() => setSelectedModification(mod)}
                  className="group cursor-pointer bg-white border border-gray-100 rounded-[20px] p-5 md:p-6 hover:shadow-xl transition-all duration-300 flex flex-col items-center"
                >
                  <div className="w-full aspect-[4/3] bg-[#f9fafb] rounded-[16px] mb-4 md:mb-6 flex items-center justify-center group-hover:bg-gray-50 transition-colors">
                     <Car className="w-12 h-12 md:w-16 md:h-16 text-gray-200 group-hover:text-purple-100 transition-colors stroke-[1.5]" />
                  </div>
                  <h3 className="text-[15px] md:text-[17px] font-black text-[#111827] text-center tracking-tight mb-1 md:mb-2 uppercase">
                    {mod.title}
                  </h3>
                  <p className="text-[10px] md:text-[11px] font-bold text-gray-400 text-center leading-relaxed px-2">
                    {mod.details}
                  </p>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* Detailed Modification Selection View */
          <div className="mt-4 md:mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Back Button */}
            <button 
              onClick={() => setSelectedModification(null)}
              className="text-[#7c3aed] text-xs md:text-sm font-bold flex items-center mb-8 md:mb-12 hover:underline"
            >
              <span className="mr-2 text-base md:text-lg">←</span> Back to Modifications
            </button>

            {/* Top Info Section */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-16 mb-12 md:mb-20">
              <div className="w-full lg:w-[400px] xl:w-[480px] aspect-square bg-[#f9fafb] rounded-[24px] md:rounded-[32px] flex items-center justify-center p-8 md:p-12 mb-8 lg:mb-0">
                <div className="text-center">
                   <h2 className="text-2xl md:text-[38px] font-serif font-bold text-[#111827] mb-2 leading-tight">
                    {makerName.charAt(0) + makerName.slice(1).toLowerCase()} Camry
                   </h2>
                </div>
              </div>

              <div className="flex-1">
                <h1 className="text-3xl md:text-[48px] font-serif font-black text-[#111827] mb-1 leading-tight">
                  {makerName.charAt(0) + makerName.slice(1).toLowerCase()} Camry
                </h1>
                <p className="text-lg md:text-[22px] font-semibold text-gray-400 mb-8 md:mb-10">2018 - Present</p>

                <div className="grid grid-cols-3 gap-6 md:gap-12 mb-8 md:mb-10">
                  <div>
                    <p className="text-[11px] md:text-[13px] font-bold text-[#111827] mb-1 md:mb-2">Engine</p>
                    <p className="text-[13px] md:text-[15px] font-medium text-gray-400">2.5</p>
                  </div>
                  <div>
                    <p className="text-[11px] md:text-[13px] font-bold text-[#111827] mb-1 md:mb-2">Engine Type</p>
                    <p className="text-[13px] md:text-[15px] font-medium text-gray-400">Petrol</p>
                  </div>
                  <div>
                    <p className="text-[11px] md:text-[13px] font-bold text-[#111827] mb-1 md:mb-2">Body Type</p>
                    <p className="text-[13px] md:text-[15px] font-medium text-gray-400">Sedan</p>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed max-w-[600px] text-sm md:text-[15px] font-medium">
                  The {makerName.charAt(0) + makerName.slice(1).toLowerCase()} Camry is a reliable mid-size sedan known for its comfort and efficiency.
                </p>
              </div>
            </div>

            {/* Tabs Trigger */}
            <div className="bg-[#f9fafb] p-1 rounded-[16px] flex md:inline-flex space-x-1 mb-8 md:mb-12 border border-gray-100 overflow-hidden">
               <button className="flex-1 md:px-12 py-3 md:py-3.5 bg-[#7c3aed] text-white rounded-[12px] font-black text-sm md:text-[15px] shadow-lg shadow-purple-200">
                 Service Parts
               </button>
               <button className="flex-1 md:px-12 py-3 md:py-3.5 text-gray-500 hover:text-[#7c3aed] rounded-[12px] font-black text-sm md:text-[15px] transition-colors">
                 Assembly Parts
               </button>
            </div>

            {/* Table Section */}
            <div className="bg-white border border-gray-100 rounded-[20px] md:rounded-[24px] overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead className="bg-[#f9fafb] border-b border-gray-100">
                    <tr>
                      <th className="px-6 md:px-8 py-5 md:py-6 text-[11px] md:text-[13px] font-black text-[#111827] tracking-tight whitespace-nowrap">Model</th>
                      <th className="px-6 md:px-8 py-5 md:py-6 text-[11px] md:text-[13px] font-black text-[#111827] tracking-tight whitespace-nowrap">Year</th>
                      <th className="px-6 md:px-8 py-5 md:py-6 text-[11px] md:text-[13px] font-black text-[#111827] tracking-tight whitespace-nowrap">Engine</th>
                      <th className="px-6 md:px-8 py-5 md:py-6 text-[11px] md:text-[13px] font-black text-[#111827] tracking-tight whitespace-nowrap">Power</th>
                      <th className="px-6 md:px-8 py-5 md:py-6 text-[11px] md:text-[13px] font-black text-[#111827] tracking-tight whitespace-nowrap">Fuel Type</th>
                      <th className="px-6 md:px-8 py-5 md:py-6"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {vehicleVariants.map((variant, idx) => (
                      <tr key={idx} className="group hover:bg-gray-50 transition-colors">
                        <td className="px-6 md:px-8 py-5 md:py-7 text-[12px] md:text-[13px] font-black text-[#374151] tracking-tight whitespace-nowrap">{variant.model}</td>
                        <td className="px-6 md:px-8 py-5 md:py-7 text-[12px] md:text-[13px] font-medium text-gray-400 whitespace-nowrap">{variant.year}</td>
                        <td className="px-6 md:px-8 py-5 md:py-7 text-[12px] md:text-[13px] font-medium text-gray-400 whitespace-nowrap">{variant.engine}</td>
                        <td className="px-6 md:px-8 py-5 md:py-7 text-[12px] md:text-[13px] font-medium text-gray-400 whitespace-nowrap">{variant.power}</td>
                        <td className="px-6 md:px-8 py-5 md:py-7 text-[12px] md:text-[13px] font-medium text-gray-400 whitespace-nowrap">{variant.fuel}</td>
                        <td className="px-6 md:px-8 py-5 md:py-7 text-right">
                          <button className="bg-[#f47a4d] text-white px-5 md:px-8 py-2 md:py-2.5 rounded-[10px] font-bold text-xs md:text-[14px] hover:bg-[#e3693c] transition-all shadow-md shadow-orange-100 hover:shadow-orange-200">
                            Choose
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OEMModelSelect;

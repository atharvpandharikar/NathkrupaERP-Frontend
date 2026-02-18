import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-12">
      <div className="max-w-[1400px] mx-auto px-10">
        {/* Brand Logo / Text */}
        <div className="mb-16">
          <h1 className="text-[38px] font-black tracking-tighter text-gray-900">NathKrupaERP</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Marketplace Column */}
          <div className="lg:col-span-2">
            <h3 className="text-[#9ca3af] text-[15px] font-bold mb-8 tracking-wide">Marketplace</h3>
            <ul className="space-y-4">
              {['Home', 'Garage', 'Categories', 'OEM Catalogue'].map((link) => (
                <li key={link}>
                  <Link to="/" className="text-[15px] font-medium text-[#374151] hover:text-[#f47a4d] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div className="lg:col-span-3">
            <h3 className="text-[#9ca3af] text-[15px] font-bold mb-8 tracking-wide">Support</h3>
            <ul className="space-y-4">
              {['Bulk Orders', 'Supplier', 'Help Center'].map((link) => (
                <li key={link}>
                  <Link to="/" className="text-[15px] font-medium text-[#374151] hover:text-[#f47a4d] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Map Area */}
          <div className="lg:col-span-7 relative">
            <div className="rounded-[24px] overflow-hidden h-[300px] border border-gray-100 shadow-sm relative group">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
                alt="Map View" 
                className="w-full h-full object-cover grayscale opacity-20"
              />
              
              {/* Fake Map Elements to mimic image */}
              <div className="absolute inset-0 p-8 flex items-center justify-center">
                 <div className="relative">
                    <div className="bg-white px-4 py-2 rounded-lg shadow-xl border border-gray-100 flex items-center space-x-3 max-w-[280px]">
                      <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <p className="text-[13px] font-bold text-gray-800 leading-tight">
                        Nathkrupa Body Builders And Auto Accessorie
                      </p>
                    </div>
                 </div>
              </div>

              {/* View On Map Button */}
              <div className="absolute bottom-6 right-6">
                <button className="bg-[#f47a4d] text-white px-8 py-3.5 rounded-full font-bold flex items-center space-x-2 hover:bg-[#e3693c] transition-all shadow-lg hover:shadow-orange-200/50">
                  <span>View On Map</span>
                  <span className="text-xl leading-none">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Contact Bar */}
        <div className="mt-20 pt-10 border-t border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-[14px] font-bold text-[#6b7280]">
            <div className="flex items-center space-x-8">
              
            </div>

            <div className="flex items-center space-x-8">
              <span className="hover:text-gray-900 transition-colors">+91 9850523224</span>
              <span className="hover:text-gray-900 transition-colors">+91 7038929499</span>
              <span className="hover:text-gray-900 transition-colors font-medium">contact@nathkrupabody.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

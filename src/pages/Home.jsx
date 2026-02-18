import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Star, ShoppingCart } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentThought, setCurrentThought] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2000",
      title: "Free Delivery",
      subtitle: "from wide rand of products from TATA",
      date: "12-18th Jan"
    },
    {
      image: "https://images.unsplash.com/photo-1486497395400-7ec0a1df60c4?auto=format&fit=crop&q=80&w=2000",
      title: "Premium Alloys",
      subtitle: "Exclusive 15% discount on racing wheels",
      date: "Valid till 25th Jan"
    },
    {
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000",
      title: "Engine Care Kit",
      subtitle: "Complete maintenance set for high performance",
      date: "Limited Time Offer"
    }
  ];

  const thoughts = [
    {
      quote: "“The guided part search and vehicle garage has saved our clients hours!”",
      author: "Auto Service Pro"
    },
    {
      quote: "“Finding OEM parts has never been easier. The interface is just seamless.”",
      author: "Mechanic Daily"
    },
    {
      quote: "“The best inventory management for automotive needs. Outstanding support.”",
      author: "Elite Auto Care"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentThought((prev) => (prev + 1) % thoughts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [thoughts.length]);

  return (
    <div className="w-full bg-white font-sans">
      {/* Top Banner / Note */}
      <div className="max-w-[1400px] mx-auto px-10 py-6 flex justify-end">
        <div className="flex items-start space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#7c3aed] mt-1 shrink-0" />
          <p className="text-[#374151] text-[13px] cursor-default leading-tight font-semibold">
            Save your vehicles <br /> and we'll show parts <br /> that fit.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-[1400px] mx-auto px-10 pb-16 border-b border-gray-100">
        <div className="flex flex-col lg:flex-row items-start justify-between mb-16">
          {/* Left Side: Title and Badge */}
          <div className="flex-1 pt-2">
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden shadow-sm">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 20}`} alt="User" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-[#f9fafb] flex items-center justify-center shadow-sm">
                   <div className="flex flex-col items-center">
                    <div className="flex space-x-0.5">
                      <Star className="w-1 h-1 fill-orange-500 text-orange-500" />
                      <Star className="w-1 h-1 fill-orange-500 text-orange-500" />
                    </div>
                    <Star className="w-1 h-1 fill-orange-500 text-orange-500" />
                   </div>
                </div>
              </div>
              <div>
                <div className="font-black text-[#111827] text-lg">100k+</div>
                <p className="text-xs text-[#4b5563] font-bold">Happy Customers</p>
              </div>
            </div>
            
            <h1 className="text-[58px] font-serif font-bold text-[#f47a4d] leading-[1.1] tracking-tight">
              Find Vehicle Parts
            </h1>
          </div>
          
          {/* Right Side: Header Search */}
          <div className="flex items-center space-x-10 mt-10 lg:mt-0 lg:ml-16">
            <div className="h-32 w-[1px] bg-gray-100 hidden lg:block" />
            
            <div className="flex space-x-8">
              {/* Search by Details */}
              <div className="w-[260px]">
                <label className="block text-[#4b5563] text-[13px] font-bold mb-3">Search by Vehicle Details</label>
                <div className="bg-white border border-gray-200 rounded-full px-6 py-4 flex items-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] focus-within:border-[#f47a4d] focus-within:ring-4 focus-within:ring-orange-50 transition-all">
                  <input 
                    type="text" 
                    placeholder='Search: "Brake Pads"' 
                    className="w-full bg-transparent outline-none text-[#111827] font-bold text-sm placeholder-[#9ca3af]"
                  />
                </div>
              </div>

              {/* Search by No. Plate */}
              <div className="w-[260px]">
                <label className="block text-[#4b5563] text-[13px] font-bold mb-3">Search by No. Plate</label>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-white border border-gray-200 rounded-full px-6 py-4 flex items-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] focus-within:border-[#f47a4d] focus-within:ring-4 focus-within:ring-orange-50 transition-all">
                    <input 
                      type="text" 
                      placeholder="MH 1 AA 2345" 
                      className="w-full bg-transparent outline-none text-[#111827] font-black text-base placeholder-[#9ca3af]"
                    />
                    <div className="ml-2 w-7 h-4 bg-[#000080] rounded flex items-center justify-center p-0.5">
                      <div className="flex flex-col items-center leading-none">
                        <span className="text-[4px] text-white font-black">IND</span>
                        <div className="w-2.5 h-2.5 rounded-full border border-white/40 flex items-center justify-center">
                          <div className="w-1 h-1 bg-white rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="bg-[#f47a4d] text-white p-5 rounded-full hover:bg-[#e3693c] transition-all hover:scale-105 shadow-lg shadow-orange-100/50 flex items-center justify-center">
                    <Search className="w-6 h-6 stroke-[3]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Filter Row */}
        <div className="mt-8">
          <label className="block text-[#4b5563] text-[14px] font-bold mb-5">Search by Vehicle Details</label>
          <div className="flex flex-wrap lg:flex-nowrap gap-4 items-center">
            {[
              "Select Car Maker", 
              "Select Model Line", 
              "Select Year", 
              "Select Model"
            ].map((placeholder) => (
              <div key={placeholder} className="flex-1 min-w-[180px] h-[60px] bg-white border border-gray-200 rounded-full px-6 flex items-center justify-between cursor-pointer hover:border-[#f47a4d] transition shadow-[0_4px_20px_rgba(0,0,0,0.02)] group">
                <span className="text-[#374151] text-[14px] font-bold group-hover:text-[#111827]">{placeholder}</span>
                <ChevronDown className="w-4 h-4 text-[#4b5563] group-hover:text-[#f47a4d]" />
              </div>
            ))}
            <button className="bg-[#f47a4d] text-white px-10 h-[60px] rounded-full font-black text-lg flex items-center justify-center hover:bg-[#e3693c] transition-all hover:scale-[1.02] shadow-xl shadow-orange-200/40 space-x-2">
              <Search className="w-5 h-5 stroke-[3]" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Section Below the Hero */}
      <section className="py-16 px-10 max-w-[1400px] mx-auto">
        {/* Deals of the Day Header */}
        <div className="mb-8">
          <h2 className="text-[32px] font-bold text-[#111827] leading-tight">Deals of the Day</h2>
          <p className="text-[#6b7280] text-base font-medium">Offers for the day upto 20% off</p>
        </div>

        {/* Hero Carousel Area */}
        <div className="relative rounded-[24px] overflow-hidden mb-6 h-[480px]">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-[20px] p-6 flex flex-col md:flex-row items-center justify-between shadow-2xl">
                  <div className="flex-1 text-left">
                    <h3 className="text-2xl font-bold text-[#111827] mb-1">{slide.title}</h3>
                    <p className="text-[#6b7280] text-[15px] font-medium">{slide.subtitle}</p>
                  </div>
                  <div className="flex items-center space-x-12 mt-4 md:mt-0">
                    <span className="text-[#6b7280] text-[15px] font-bold">{slide.date}</span>
                    <button className="bg-[#f47a4d] text-white px-8 py-3 rounded-full font-bold flex items-center space-x-2 hover:bg-[#e3693c] transition-all group">
                      <span>View</span>
                      <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex items-center space-x-3 mb-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${index === currentSlide ? 'w-12 h-2.5 bg-[#f47a4d]' : 'w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300'}`}
            />
          ))}
        </div>

        {/* Compact Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {[
            { brand: "Roots", model: "MS...2H", name: "Megasonic 12V Ht", price: "₹ 1,617.00" },
            { brand: "Waves", model: "MS...5J", name: "Sonic Wave 24V Ht", price: "₹ 2,150.00" },
            { brand: "Tides", model: "MS...3K", name: "Tidal Force 36V Ht", price: "₹ 3,200.00" },
            { brand: "Storms", model: "MS...8D", name: "Tempest 48V Ht", price: "₹ 4,500.00" },
            { brand: "Gusts", model: "MS...6F", name: "Whirlwind 60V Ht", price: "₹ 5,750.00" },
            { brand: "Currents", model: "MS...7V", name: "Oceanic Flow 72V Ht", price: "₹ 6,800.00" },
          ].map((item, idx) => (
            <div key={idx} className="cursor-pointer group">
              <div className="aspect-square bg-gray-50 rounded-[16px] mb-3 flex items-center justify-center p-6 group-hover:bg-gray-100 transition-colors">
                <div className="w-full aspect-square rounded-full border-[6px] border-white bg-gray-200 shadow-sm flex items-center justify-center overflow-hidden">
                   <div className="w-full h-full border-4 border-gray-300 rounded-full flex items-center justify-center">
                     <div className="w-1/2 h-1/2 rounded-full border-2 border-gray-400" />
                   </div>
                </div>
              </div>
              <div className="flex justify-between items-start mb-1">
                <span className="text-[12px] font-bold text-gray-400">{item.brand}</span>
                <span className="text-[10px] font-bold text-gray-300 tracking-wider uppercase">{item.model}</span>
              </div>
              <h4 className="text-[13px] font-bold text-[#111827] line-clamp-1 mb-1">{item.name}</h4>
              <p className="text-[14px] font-black text-[#111827]">{item.price}</p>
            </div>
          ))}
        </div>

        {/* Categories Section */}
        <div className="pt-16 border-t border-gray-100 mb-20">
          <div className="flex justify-between items-end mb-10 px-2">
            <div>
              <h2 className="text-[32px] font-bold text-[#111827] leading-tight">Categories</h2>
              <p className="text-[#6b7280] text-base font-medium">Browse authentic OEM auto parts</p>
            </div>
            <button className="text-[#f47a4d] text-base font-black hover:underline underline-offset-8">See All</button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
            {[
              "Maintenance Service Parts", 
              "Filters", 
              "Windscreen Cleaning System", 
              "Car Accessories", 
              "Lighting",
              "Control Cables",
              "Brake System",
              "Bearings",
              "Clutch System",
              "Electric Components"
            ].map((category) => (
              <div key={category} className="cursor-pointer group">
                <div className="aspect-square bg-gray-100 rounded-[20px] mb-4 flex items-center justify-center p-8 group-hover:bg-gray-200 transition-all duration-300 group-hover:scale-[1.02]">
                  <div className="w-full aspect-square rounded-full border-[8px] border-white bg-gray-200 shadow-md flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full border-4 border-gray-300 rounded-full flex items-center justify-center">
                      <div className="w-1/3 h-1/3 rounded-full border-2 border-gray-400" />
                    </div>
                  </div>
                </div>
                <h4 className="text-[15px] font-bold text-[#111827] group-hover:text-[#f47a4d] transition-colors leading-snug px-1">
                  {category}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Recently Viewed Section */}
        <div className="pt-20 border-t border-gray-100 mt-20">
          <div className="flex justify-between items-end mb-10 px-2">
            <div>
              <h2 className="text-[32px] font-bold text-[#111827] leading-tight">Recently Viewed</h2>
              <p className="text-[#6b7280] text-base font-medium">Parts Viewed by you recently</p>
            </div>
            <button className="text-[#f47a4d] text-base font-black hover:underline underline-offset-8 transition-colors">See All</button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {[
              { brand: "Toyota", name: "Front Brake Pads Set", price: "₹ 2,300" },
              { brand: "Honda", name: "Rear Brake Pads Set", price: "₹ 2,500" },
              { brand: "Ford", name: "Brake Rotors Front", price: "₹ 3,200" },
              { brand: "Chevrolet", name: "Drum Brake Kit", price: "₹ 1,800" },
              { brand: "Nissan", name: "Brake Fluid", price: "₹ 750" },
              { brand: "Hyundai", name: "ABS Module", price: "₹ 15,000" },
              { brand: "Volkswagen", name: "Brake Caliper", price: "₹ 7,500" }
            ].map((item, idx) => (
              <div key={idx} className="cursor-pointer group">
                <div className="aspect-square bg-gray-50 rounded-[20px] mb-4 flex items-center justify-center p-6 group-hover:bg-gray-100 transition-colors">
                  <div className="w-full aspect-square rounded-full border-[6px] border-white bg-gray-200 shadow-sm flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full border-4 border-gray-300 rounded-full flex items-center justify-center">
                      <div className="w-1/2 h-1/2 rounded-full border-2 border-gray-400" />
                    </div>
                  </div>
                </div>
                <div className="mb-1">
                  <span className="text-[12px] font-bold text-gray-400">{item.brand}</span>
                </div>
                <h4 className="text-[14px] font-bold text-[#111827] group-hover:text-[#f47a4d] transition-colors line-clamp-2 mb-2 leading-snug">
                  {item.name}
                </h4>
                <p className="text-[16px] font-black text-[#111827]">{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Thought Section Carousel */}
        <div className="pt-20 border-t border-gray-100 mt-20 mb-32">
          <div className="relative bg-[#f9fafb] rounded-[32px] p-20 min-h-[300px] flex flex-col items-center justify-center overflow-hidden">
            <div className="text-center transition-all duration-700 ease-in-out">
              <h2 className="text-[32px] md:text-[40px] font-black text-[#f47a4d] mb-6 leading-tight max-w-[800px] mx-auto">
                {thoughts[currentThought].quote}
              </h2>
              <p className="text-gray-400 text-sm font-medium tracking-wide uppercase">
                {thoughts[currentThought].author}
              </p>
            </div>
          </div>
          
          {/* Pagination Indicators */}
          <div className="flex items-center space-x-2 mt-8">
            {thoughts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentThought(index)}
                className={`transition-all duration-300 rounded-full ${index === currentThought ? 'w-10 h-2 bg-[#f47a4d]' : 'w-2 h-2 bg-gray-200'}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
import React, { useState } from 'react';
import { ChevronDown, RotateCcw, Box, Building2, LayoutGrid, Package, User, Heart, MapPin, FileText, Building, Pencil, Lock, ArrowLeft, Mail, Smartphone, X } from 'lucide-react';

const Account = () => {
  const [activeTab, setActiveTab] = useState('Orders');
  const [statusFilterOpen, setStatusFilterOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('Completed');
  const [vehicleFilterOpen, setVehicleFilterOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState('BMW i8');
  const [openTrackOrderId, setOpenTrackOrderId] = useState(null);
  const [openReturnOrderId, setOpenReturnOrderId] = useState(null);
  const [showFAQ, setShowFAQ] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [selectedReturnReason, setSelectedReturnReason] = useState(null);
  const [returnStep, setReturnStep] = useState(1); // 1: Reason, 2: Options
  const [profileView, setProfileView] = useState('view'); // 'view', 'edit', 'change-password'
  const [selectedReturnOption, setSelectedReturnOption] = useState(null);

  const statuses = ['Completed', 'In Transit', 'Cancelled'];
  const vehicles = ['All Cars', 'BMW i8', 'Audi A6', 'Mercedes C-Class', 'Tesla Model 3'];
  const trackingSteps = [
    { title: 'Order Placed', date: 'October 10, 2023', status: 'completed' },
    { title: 'Processing', date: 'October 12, 2023', status: 'completed' },
    { title: 'Shipped', date: 'October 12, 2023', status: 'current' },
    { title: 'Online shipment booked', date: 'Pending', status: 'pending' }
  ];
  const returnReasons = [
    'Bought by mistake',
    'Better price available',
    'Product damaged, but shipping box OK',
    'Received wrong item',
    'Quality not as expected',
    'Missing parts in the package',
    'Item arrived late'
  ];

  const tabs = [
    { id: 'Orders', icon: Package },
    { id: 'Profile', icon: User },
    { id: 'Wishlists', icon: Heart },
    { id: 'Addresses', icon: MapPin },
    { id: 'Company/GST', icon: Building2 },
    { id: 'Documents', icon: FileText }
  ];

  const orders = [
    {
      id: "1209307",
      date: "October 10, 2023",
      name: "Rear Brake Rotors",
      price: 3500,
      status: "In Transit",
      image: "https://img.freepik.com/free-photo/car-parts-isolated-white-background_1232-4028.jpg"
    },
    {
      id: "1209308",
      date: "October 14, 2023",
      name: "Air Filter",
      price: 850,
      status: "In Transit",
      image: "https://img.freepik.com/free-photo/car-parts-isolated-white-background_1232-4028.jpg"
    },
    {
      id: "1209304",
      date: "October 10, 2023",
      name: "Rear Brake Rotors",
      price: 3500,
      status: "Delivered",
      image: "https://img.freepik.com/free-photo/car-parts-isolated-white-background_1232-4028.jpg"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-10 md:py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-[42px] font-serif font-bold text-[#111827] mb-2 tracking-tight">My Account</h1>
          <p className="text-gray-400 text-lg">Manage all your details at one place.</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center space-x-8 md:space-x-12 border-b border-gray-100 mb-12 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 text-[16px] md:text-[18px] font-bold whitespace-nowrap transition-all relative ${
                activeTab === tab.id ? 'text-[#111827]' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab.id}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#7c3aed] rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {activeTab === 'Orders' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Filters Bar */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4 relative">
                <button 
                  onClick={() => setStatusFilterOpen(!statusFilterOpen)}
                  className={`flex items-center px-4 py-2.5 bg-white border rounded-[12px] text-[13px] font-bold transition-all shadow-sm ${
                  statusFilterOpen ? 'border-[#f47a4d] ring-4 ring-orange-50' : 'border-gray-100 text-gray-500 hover:border-gray-200'
                }`}>
                  <Box className="w-4 h-4 mr-2.5 text-[#f47a4d]" />
                  {selectedStatus}
                  <ChevronDown className={`w-4 h-4 ml-2.5 text-gray-300 transition-transform duration-300 ${statusFilterOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Status Dropdown Menu */}
                {statusFilterOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setStatusFilterOpen(false)}></div>
                    <div className="absolute top-full left-0 mt-3 w-[220px] bg-white border border-gray-100 rounded-[24px] shadow-2xl shadow-gray-200/50 p-3 z-20 animate-in fade-in zoom-in-95 duration-200 origin-top-left">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-[1.5px] px-4 py-2 mb-1">FILTER BY STATUS</p>
                      <div className="space-y-1">
                        {statuses.map((status) => (
                          <button
                            key={status}
                            onClick={() => {
                              setSelectedStatus(status);
                              setStatusFilterOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-[16px] text-[14px] font-bold transition-all ${
                              selectedStatus === status 
                              ? 'bg-orange-50 text-[#f47a4d]' 
                              : 'text-gray-400 hover:bg-gray-50 hover:text-gray-600'
                            }`}
                          >
                            <div className="flex items-center">
                              <div className={`w-1.5 h-1.5 rounded-full mr-3.5 ${
                                selectedStatus === status ? 'bg-[#f47a4d]' : 'border border-gray-300 bg-transparent'
                              }`}></div>
                              {status}
                            </div>
                            {selectedStatus === status && (
                              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm">
                                <svg className="w-3.5 h-3.5 text-[#f47a4d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="flex items-center space-x-4">
                <div className="relative">
                  <button 
                    onClick={() => setVehicleFilterOpen(!vehicleFilterOpen)}
                    className={`flex items-center px-4 py-2.5 bg-white border rounded-[12px] text-[13px] font-bold transition-all shadow-sm ${
                    vehicleFilterOpen ? 'border-[#f47a4d] ring-4 ring-orange-50' : 'border-gray-100 text-gray-500 hover:border-gray-200'
                  }`}>
                    <Package className="w-4 h-4 mr-2.5 text-[#f47a4d]" />
                    {selectedVehicle}
                    <ChevronDown className={`w-4 h-4 ml-2.5 text-gray-300 transition-transform duration-300 ${vehicleFilterOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Vehicle Dropdown Menu */}
                  {vehicleFilterOpen && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setVehicleFilterOpen(false)}></div>
                      <div className="absolute top-full right-0 md:left-0 mt-3 w-[220px] bg-white border border-gray-100 rounded-[24px] shadow-2xl shadow-gray-200/50 p-3 z-20 animate-in fade-in zoom-in-95 duration-200 origin-top">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[1.5px] px-4 py-2 mb-1">FILTER BY VEHICLE</p>
                        <div className="space-y-1">
                          {vehicles.map((v) => (
                            <button
                              key={v}
                              onClick={() => {
                                setSelectedVehicle(v);
                                setVehicleFilterOpen(false);
                              }}
                              className={`w-full flex items-center justify-between px-4 py-3 rounded-[16px] text-[14px] font-bold transition-all ${
                                selectedVehicle === v 
                                ? 'bg-orange-50 text-[#f47a4d]' 
                                : 'text-gray-400 hover:bg-gray-50 hover:text-gray-600'
                              }`}
                            >
                              <div className="flex items-center">
                                <div className={`w-1.5 h-1.5 rounded-full mr-3.5 ${
                                  selectedVehicle === v ? 'bg-[#f47a4d]' : 'border border-gray-300 bg-transparent'
                                }`}></div>
                                {v}
                              </div>
                              {selectedVehicle === v && (
                                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm">
                                  <svg className="w-3.5 h-3.5 text-[#f47a4d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
                
                <div className="flex items-center">
                  <span className="text-[13px] font-bold text-gray-300 mr-3">from</span>
                  <button className="flex items-center px-5 py-2.5 bg-white border border-gray-100 rounded-[14px] text-[14px] font-black text-gray-600 hover:border-[#7c3aed] hover:text-[#7c3aed] transition-all shadow-sm group">
                    Garage
                    <div className="ml-3 w-8 h-5 bg-gray-100 rounded-lg flex items-center px-1 group-hover:bg-[#7c3aed]/10">
                       <Building className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#7c3aed]" />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Orders List */}
            <div className="space-y-6">
              {orders.map((order) => (
                <div key={order.id} className="bg-white border border-gray-100/60 rounded-[28px] overflow-hidden hover:shadow-xl hover:shadow-gray-100/40 transition-all duration-500 group">
                  <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between">
                    <div className="flex flex-col md:flex-row items-center flex-1 w-full">
                      {/* Image Placeholder */}
                      <div className="w-[180px] h-[130px] bg-gray-50 rounded-[24px] flex items-center justify-center p-6 mb-6 md:mb-0 md:mr-10 transition-transform group-hover:scale-105 duration-500">
                        <img src={order.image} alt={order.name} className="max-w-full max-h-full object-contain" />
                      </div>

                      <div className="text-center md:text-left flex-1">
                        <p className="text-[13px] font-bold text-gray-300 mb-1.5 uppercase tracking-wide">Placed on {order.date}</p>
                        <h3 className="text-[20px] font-black text-[#111827] mb-3">{order.name}</h3>
                        <p className="text-[24px] font-black text-[#111827]">₹ {order.price.toLocaleString()}</p>
                      </div>
                    </div>

                    <div className="mt-8 md:mt-0 md:text-right w-full md:w-auto flex flex-col md:items-end justify-center">
                      <div className="mb-6">
                        <p className="text-[15px] font-black text-[#111827] mb-1 leading-none">Status: {order.status === 'In Transit' ? 'In-transit' : order.status}</p>
                        <p className="text-[13px] font-bold text-gray-400">Order no: {order.id}</p>
                      </div>
                      
                      {order.status === 'In Transit' ? (
                        <button 
                          onClick={() => setOpenTrackOrderId(openTrackOrderId === order.id ? null : order.id)}
                          className={`flex items-center justify-center px-10 py-3.5 border-[2px] transition-all rounded-full font-black text-[14px] group/btn ${
                            openTrackOrderId === order.id 
                            ? 'border-[#7c3aed] text-[#7c3aed] bg-purple-50/10'
                            : 'border-[#7c3aed] text-[#7c3aed] hover:bg-purple-50/50'
                          }`}
                        >
                          Track
                          <ChevronDown className={`w-4 h-4 ml-3 transition-transform duration-300 ${openTrackOrderId === order.id ? 'rotate-180' : ''}`} />
                        </button>
                      ) : (
                        <button 
                          onClick={() => {
                            if (openReturnOrderId === order.id) {
                              setOpenReturnOrderId(null);
                            } else {
                              setOpenReturnOrderId(order.id);
                              setReturnStep(1);
                              setSelectedReturnReason(null);
                              setSelectedReturnOption(null);
                            }
                          }}
                          className={`flex items-center justify-center px-8 py-3.5 rounded-full font-black text-[14px] transition-all group/btn ${
                            openReturnOrderId === order.id 
                            ? 'border-[2px] border-[#7c3aed] text-[#7c3aed] bg-purple-50/10' 
                            : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-[#111827]'
                          }`}
                        >
                          <RotateCcw className={`w-4 h-4 mr-3 transition-transform ${openReturnOrderId === order.id ? 'rotate-180' : 'group-hover/btn:-rotate-45'}`} />
                          Return
                          <ChevronDown className={`w-4 h-4 ml-3 transition-transform duration-300 ${openReturnOrderId === order.id ? 'rotate-180' : 'opacity-40'}`} />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Tracking Section */}
                  {openTrackOrderId === order.id && (
                    <div className="bg-gray-50/30 border-t border-gray-100 p-8 md:p-10 animate-in slide-in-from-top-4 duration-500">
                      
                      {/* FAQ Card */}
                      {showFAQ && (
                        <div className="mb-8 bg-white border border-orange-100 rounded-[24px] p-8 relative animate-in zoom-in-95 duration-300 shadow-sm shadow-orange-50/50">
                          <button 
                            onClick={() => setShowFAQ(false)}
                            className="absolute top-6 right-6 w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 transition-all"
                          >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                          </button>
                          
                          <div className="flex items-start mb-6">
                            <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center mr-4">
                               <Package className="w-5 h-5 text-[#f47a4d]" />
                            </div>
                            <h4 className="text-[18px] font-black text-[#111827] mt-1.5">Frequently Asked Questions</h4>
                          </div>

                          <div className="space-y-6">
                            <div>
                              <p className="text-[14px] font-black text-[#111827] mb-1">How long does shipping take?</p>
                              <p className="text-[13px] font-medium text-gray-400">Standard shipping takes 3-5 business days. Express shipping is available.</p>
                            </div>
                            <div>
                              <p className="text-[14px] font-black text-[#111827] mb-1">Can I track my order?</p>
                              <p className="text-[13px] font-medium text-gray-400">Yes! You'll receive tracking updates via email and SMS as your order progresses.</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Support Card Placeholder */}
                      {showSupport && (
                        <div className="mb-8 bg-white border border-[#7c3aed]/10 rounded-[24px] p-8 relative animate-in zoom-in-95 duration-300 shadow-sm shadow-purple-50/50">
                          <button 
                            onClick={() => setShowSupport(false)}
                            className="absolute top-6 right-6 w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 transition-all"
                          >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                          </button>
                          
                          <div className="flex items-start mb-4">
                            <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center mr-4">
                               <User className="w-5 h-5 text-[#7c3aed]" />
                            </div>
                            <div className="mt-1">
                              <h4 className="text-[18px] font-black text-[#111827] leading-none mb-1">Customer Support</h4>
                              <p className="text-[13px] font-medium text-gray-400">We're here to help you</p>
                            </div>
                          </div>
                          <p className="text-[14px] font-medium text-gray-500 mb-6">Our support team is available 24/7 for any queries regarding your order.</p>
                          <button className="px-8 py-3.5 bg-[#7c3aed] text-white rounded-full font-black text-[14px] hover:bg-[#6d28d9] transition-all">
                            Start Chat
                          </button>
                        </div>
                      )}

                      {/* Tracking Header */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 space-y-4 md:space-y-0">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-[#7c3aed] rounded-[14px] flex items-center justify-center mr-5 shadow-lg shadow-purple-100">
                             <Box className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-[18px] font-black text-[#111827] leading-none mb-1.5">Order Tracking</h4>
                            <p className="text-[14px] font-medium text-gray-400">Your order is on its way</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <button 
                            onClick={() => setShowSupport(!showSupport)}
                            className={`flex items-center px-6 py-2.5 bg-white border rounded-xl text-[12px] font-bold transition-all group/trackbtn shadow-sm ${
                            showSupport ? 'border-[#7c3aed] text-[#7c3aed] ring-2 ring-purple-50' : 'border-gray-100 text-gray-500 hover:border-gray-200'
                          }`}>
                            Contact Support
                            <ChevronDown className={`w-3.5 h-3.5 ml-2 -rotate-90 transition-transform ${showSupport ? 'rotate-0' : 'opacity-40 group-hover/trackbtn:translate-x-1'}`} />
                          </button>
                          <button 
                            onClick={() => setShowFAQ(!showFAQ)}
                            className={`flex items-center px-6 py-2.5 bg-white border rounded-xl text-[12px] font-bold transition-all group/trackbtn shadow-sm ${
                            showFAQ ? 'border-[#f47a4d] text-[#f47a4d] ring-2 ring-orange-50' : 'border-gray-100 text-gray-500 hover:border-gray-200'
                          }`}>
                            FAQs
                            <ChevronDown className={`w-3.5 h-3.5 ml-2 -rotate-90 transition-transform ${showFAQ ? 'rotate-0' : 'opacity-40 group-hover/trackbtn:translate-x-1'}`} />
                          </button>
                        </div>
                      </div>

                      {/* Timeline */}
                      <div className="relative pl-4 ml-4">
                        <div className="absolute left-0 top-2 bottom-8 w-[4.5px] bg-gray-100 rounded-full"></div>
                        <div className="space-y-6">
                          {trackingSteps.map((step, idx) => (
                            <div key={idx} className="relative pl-12">
                              {/* Dot/Icon */}
                              <div className={`absolute left-[-18.5px] top-4 w-[32px] h-[32px] rounded-full flex items-center justify-center ring-4 ring-white z-10 ${
                                step.status === 'completed' ? 'bg-[#7c3aed]' : 
                                step.status === 'current' ? 'bg-[#f47a4d]' : 'bg-white border-[3px] border-gray-100'
                              }`}>
                                {step.status === 'completed' && <RotateCcw className="w-4 h-4 text-white -rotate-45" />}
                                {step.status === 'current' && <Package className="w-4 h-4 text-white" />}
                              </div>

                              {/* Progress Line Color */}
                              {idx < trackingSteps.length - 1 && (
                                <div className={`absolute left-[-4.5px] top-[40px] w-[4.5px] h-[calc(100%+24px)] rounded-full z-0 ${
                                  step.status === 'completed' ? 'bg-[#7c3aed]' : 
                                  step.status === 'current' ? 'bg-gradient-to-b from-[#f47a4d] to-gray-100' : 'bg-gray-100'
                                }`}></div>
                              )}

                              {/* Card */}
                              <div className={`rounded-[24px] p-6 transition-all duration-500 border ${
                                step.status === 'current' 
                                ? 'bg-[#f47a4d] border-[#f47a4d] shadow-xl shadow-orange-100/50' 
                                : step.status === 'pending'
                                  ? 'bg-transparent border-gray-100'
                                  : 'bg-white border-gray-50 shadow-sm'
                              }`}>
                                <div className="flex items-center mb-1">
                                  <h5 className={`text-[17px] font-black ${step.status === 'current' ? 'text-white' : step.status === 'pending' ? 'text-gray-300' : 'text-[#111827]'}`}>
                                    {step.title}
                                  </h5>
                                  {step.status === 'current' && (
                                    <span className="ml-4 px-3 py-1 bg-white/20 text-white text-[10px] font-black uppercase tracking-widest rounded-full backdrop-blur-sm">
                                      CURRENT
                                    </span>
                                  )}
                                </div>
                                <p className={`text-[14px] font-bold ${step.status === 'current' ? 'text-white/80' : 'text-gray-400'}`}>
                                  {step.date}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Return Section */}
                  {openReturnOrderId === order.id && (
                    <div className="bg-gray-50/30 border-t border-gray-100 p-8 md:p-10 animate-in slide-in-from-top-4 duration-500">
                      {returnStep === 1 ? (
                        <>
                          <h4 className="text-[16px] font-black text-[#111827] mb-6">Select a Return Reason:</h4>
                          <div className="space-y-3">
                            {returnReasons.map((reason) => (
                              <button
                                key={reason}
                                onClick={() => setSelectedReturnReason(reason)}
                                className={`w-full flex items-center px-8 py-5 bg-white border rounded-[18px] text-[14px] font-bold transition-all text-left ${
                                  selectedReturnReason === reason 
                                  ? 'border-[#7c3aed] shadow-lg shadow-purple-50/50 text-[#7c3aed] ring-2 ring-purple-100/50' 
                                  : 'border-gray-100 text-gray-600 hover:border-gray-200'
                                }`}
                              >
                                <div className={`w-5 h-5 rounded-full border-2 mr-5 flex items-center justify-center transition-all ${
                                  selectedReturnReason === reason ? 'border-[#7c3aed]' : 'border-gray-200'
                                }`}>
                                  {selectedReturnReason === reason && <div className="w-2.5 h-2.5 bg-[#7c3aed] rounded-full"></div>}
                                </div>
                                {reason}
                              </button>
                            ))}
                          </div>

                          {/* Submit Reason -> Go to Options */}
                          {selectedReturnReason && (
                            <div className="mt-10 flex justify-end animate-in fade-in slide-in-from-bottom-2 duration-300">
                              <button 
                                onClick={() => setReturnStep(2)}
                                className="px-12 py-5 bg-[#7c3aed] text-white rounded-full font-black text-[15px] hover:bg-[#6d28d9] transition-all shadow-xl shadow-purple-100"
                              >
                                Next: Choose Return Option
                              </button>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="bg-white border-[2px] border-[#7c3aed] rounded-[28px] p-8 md:p-10 animate-in zoom-in-95 duration-500">
                          {/* Return Options Header */}
                          <div className="flex items-start mb-10">
                            <div className="w-12 h-12 bg-[#7c3aed] rounded-[14px] flex items-center justify-center mr-5 shadow-lg shadow-purple-200 shrink-0">
                               <RotateCcw className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="text-[18px] font-black text-[#111827] leading-none mb-1.5">Return Options</h4>
                              <p className="text-[14px] font-medium text-gray-400">Choose how you'd like to proceed with your return</p>
                            </div>
                          </div>

                          {/* Option Cards */}
                          <div className="space-y-4 mb-10">
                            {[
                              {
                                id: 'exchange',
                                title: 'Exchange for an item of choice',
                                desc: 'We will apply the amount of your refund to an exchange of one of your choice'
                              },
                              {
                                id: 'refund',
                                title: 'Return item and refund money to your bank account',
                                desc: 'Full refund will be processed within 5-7 business days'
                              }
                            ].map((option) => (
                              <button
                                key={option.id}
                                onClick={() => setSelectedReturnOption(option.id)}
                                className={`w-full flex items-start p-6 bg-white border rounded-[22px] transition-all group ${
                                  selectedReturnOption === option.id 
                                  ? 'border-[#7c3aed] shadow-md shadow-purple-50 ring-2 ring-purple-50' 
                                  : 'border-gray-100 hover:border-gray-200'
                                }`}
                              >
                                <div className={`w-6 h-6 border-[2.5px] rounded-[6px] mr-5 flex flex-col items-center justify-center transition-all shrink-0 mt-0.5 ${
                                  selectedReturnOption === option.id ? 'border-[#7c3aed] bg-[#7c3aed]' : 'border-gray-200'
                                }`}>
                                  {selectedReturnOption === option.id && (
                                    <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                  )}
                                </div>
                                <div className="text-left">
                                  <h5 className="text-[16px] font-black text-[#111827] mb-1 leading-none">{option.title}</h5>
                                  <p className="text-[13px] font-medium text-gray-400 leading-relaxed">{option.desc}</p>
                                </div>
                              </button>
                            ))}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-5">
                            <button className="w-full sm:flex-1 py-5 bg-[#f47a4d] text-white rounded-[20px] font-black text-[16px] transition-all hover:bg-[#e66a3d] hover:shadow-xl hover:shadow-orange-100">
                              Confirm Return
                            </button>
                            <button 
                              onClick={() => {
                                setReturnStep(1);
                                setSelectedReturnOption(null);
                              }}
                              className="w-full sm:w-auto px-10 py-5 bg-white border border-gray-200 text-[#111827] rounded-[20px] font-black text-[16px] hover:bg-gray-50 transition-all"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'Profile' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {profileView === 'view' ? (
              <div className="bg-white border border-gray-100/60 rounded-[32px] p-8 md:p-12 shadow-sm">
                <div className="flex flex-col md:flex-row items-start md:items-center mb-12">
                  <div className="relative mb-6 md:mb-0 md:mr-10">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-50 shadow-inner">
                      <img src="https://ui-avatars.com/api/?name=Anuradha+Singh&background=7c3aed&color=fff&size=128" alt="Profile" />
                    </div>
                    <button className="absolute bottom-1 right-1 w-9 h-9 bg-[#7c3aed] text-white rounded-full flex items-center justify-center border-4 border-white shadow-lg hover:scale-110 transition-transform">
                      <User className="w-4 h-4" />
                    </button>
                  </div>
                  <div>
                    <h2 className="text-[28px] font-black text-[#111827] mb-1">Anuradha Singh</h2>
                    <p className="text-gray-400 text-[15px]">Update your personal details and how we can reach you.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[13px] font-black text-gray-400 uppercase tracking-widest pl-1">Full Name</label>
                    <div className="w-full bg-gray-50/50 border border-gray-100 rounded-[18px] px-6 py-4 text-[15px] font-bold text-[#111827]">Anuradha Singh</div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] font-black text-gray-400 uppercase tracking-widest pl-1">Email Address</label>
                    <div className="w-full bg-gray-50/50 border border-gray-100 rounded-[18px] px-6 py-4 text-[15px] font-bold text-[#111827]">anusingh@gmail.com</div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] font-black text-gray-400 uppercase tracking-widest pl-1">Phone Number</label>
                    <div className="w-full bg-gray-50/50 border border-gray-100 rounded-[18px] px-6 py-4 text-[15px] font-bold text-[#111827]">+91 1111 22222</div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] font-black text-gray-400 uppercase tracking-widest pl-1">Gender</label>
                    <div className="flex space-x-3">
                       <div className="px-8 py-4 bg-purple-50 border border-[#7c3aed] text-[#7c3aed] rounded-[18px] text-[14px] font-bold">Female</div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex items-center justify-end space-x-4">
                  <button 
                    onClick={() => setProfileView('edit')}
                    className="flex items-center px-8 py-4 border-[1.5px] border-[#7c3aed] text-[#7c3aed] rounded-full font-bold text-[15px] hover:bg-purple-50 transition-all group"
                  >
                    <Pencil className="w-4 h-4 mr-2.5 transition-transform group-hover:-rotate-12" />
                    Edit Information
                  </button>
                  <button 
                    onClick={() => setProfileView('change-password')}
                    className="flex items-center px-8 py-4 bg-[#f47a4d] text-white rounded-full font-bold text-[15px] hover:bg-[#e66a3d] transition-all shadow-lg shadow-orange-100/50"
                  >
                    <Lock className="w-4 h-4 mr-2.5" />
                    Change Password
                  </button>
                </div>
              </div>
            ) : profileView === 'edit' ? (
              <div className="animate-in fade-in slide-in-from-left-4 duration-500">
                <div className="flex items-center mb-10 group cursor-pointer" onClick={() => setProfileView('view')}>
                   <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mr-4 group-hover:bg-purple-50 transition-all">
                      <ArrowLeft className="w-5 h-5 text-[#7c3aed]" />
                   </div>
                   <h2 className="text-[22px] font-black text-[#111827]">Personal Information - Edit Profile</h2>
                </div>

                <div className="space-y-6 max-w-[800px]">
                  {[
                    { label: 'First Name', value: 'Anuradha', icon: User, color: 'purple' },
                    { label: 'Last Name', value: 'Singh', icon: User, color: 'purple' },
                    { label: 'Email', value: 'anusingh@gmail.com', icon: Mail, color: 'orange' },
                    { label: 'Number', value: '+91 1111 22222', icon: Smartphone, color: 'orange' }
                  ].map((field, idx) => (
                    <div key={idx} className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${field.color === 'purple' ? 'bg-purple-50' : 'bg-orange-50'}`}>
                           <field.icon className={`w-4 h-4 ${field.color === 'purple' ? 'text-[#7c3aed]' : 'text-[#f47a4d]'}`} />
                        </div>
                        <span className="text-[13px] font-black text-gray-400 uppercase tracking-widest">{field.label}</span>
                      </div>
                      <input 
                        type="text" 
                        defaultValue={field.value} 
                        className="w-full bg-gray-50 border-none rounded-[16px] px-6 py-4 text-[16px] font-bold text-[#111827] focus:ring-2 focus:ring-purple-100 transition-all" 
                      />
                    </div>
                  ))}

                  <div className="flex items-center space-x-4 pt-4">
                    <button className="flex items-center px-10 py-5 bg-[#f47a4d] text-white rounded-[22px] font-black text-[15px] hover:bg-[#e66a3d] transition-all shadow-xl shadow-orange-100/50">
                      <RotateCcw className="w-4 h-4 mr-2.5" />
                      Save Changes
                    </button>
                    <button 
                      onClick={() => setProfileView('view')}
                      className="flex items-center px-10 py-5 bg-white border border-gray-200 text-gray-500 rounded-[22px] font-black text-[15px] hover:bg-gray-50 transition-all"
                    >
                      <X className="w-4 h-4 mr-2.5" />
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-left-4 duration-500">
                <div className="flex items-center mb-10 group cursor-pointer" onClick={() => setProfileView('view')}>
                   <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mr-4 group-hover:bg-purple-50 transition-all">
                      <ArrowLeft className="w-5 h-5 text-[#7c3aed]" />
                   </div>
                   <h2 className="text-[22px] font-black text-[#111827]">Personal Information - Change Password</h2>
                </div>

                <div className="max-w-[800px] bg-white border border-gray-100 rounded-[32px] p-8 md:p-10 shadow-sm relative overflow-hidden">
                   <div className="flex items-start mb-10">
                      <div className="w-14 h-14 bg-[#7c3aed] rounded-[18px] flex items-center justify-center mr-6 shadow-xl shadow-purple-100">
                         <Lock className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-[20px] font-black text-[#111827] mb-1">Update Your Password</h3>
                        <p className="text-[14px] font-medium text-gray-400">Choose a strong password to keep your account secure</p>
                      </div>
                   </div>

                   <div className="space-y-6">
                      <div className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-sm">
                        <div className="flex items-center mb-4">
                          <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center mr-3">
                             <Lock className="w-4 h-4 text-[#7c3aed]" />
                          </div>
                          <span className="text-[13px] font-black text-gray-400 uppercase tracking-widest">Enter New Password</span>
                        </div>
                        <input 
                          type="password" 
                          placeholder="Enter your new password" 
                          title="password" 
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          className="w-full bg-gray-50 border-none rounded-[16px] px-6 py-4 text-[16px] font-bold text-[#111827] focus:ring-2 focus:ring-purple-100 transition-all" 
                        />
                        
                        {/* Password Strength Bar */}
                        {newPassword.length > 0 && (
                          <div className="mt-4 px-2 animate-in fade-in slide-in-from-top-2 duration-300">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[11px] font-black uppercase tracking-widest text-gray-400">Strength:</span>
                              <span className={`text-[11px] font-black uppercase tracking-widest ${
                                newPassword.length < 5 ? 'text-red-500' : 
                                newPassword.length < 8 ? 'text-orange-500' :
                                /[A-Z]/.test(newPassword) && /[0-9]/.test(newPassword) ? 'text-green-500' : 'text-yellow-500'
                              }`}>
                                {newPassword.length < 5 ? 'Weak' : 
                                 newPassword.length < 8 ? 'Fair' :
                                 /[A-Z]/.test(newPassword) && /[0-9]/.test(newPassword) ? 'Strong' : 'Good'}
                              </span>
                            </div>
                            <div className="flex space-x-2">
                              {[1, 2, 3, 4].map((seg) => {
                                const strength = newPassword.length < 5 ? 1 : 
                                                 newPassword.length < 8 ? 2 :
                                                 /[A-Z]/.test(newPassword) && /[0-9]/.test(newPassword) ? 4 : 3;
                                return (
                                  <div key={seg} className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                                    seg <= strength 
                                      ? strength === 1 ? 'bg-red-400' : 
                                        strength === 2 ? 'bg-orange-400' :
                                        strength === 3 ? 'bg-yellow-400' : 'bg-green-400'
                                      : 'bg-gray-100'
                                  }`}></div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-sm">
                        <div className="flex items-center mb-4">
                          <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center mr-3">
                             <Lock className="w-4 h-4 text-[#f47a4d]" />
                          </div>
                          <span className="text-[13px] font-black text-gray-400 uppercase tracking-widest">Confirm New Password</span>
                        </div>
                        <input type="password" placeholder="Re-enter your new password" title="confirm-password" className="w-full bg-gray-50 border-none rounded-[16px] px-6 py-4 text-[16px] font-bold text-[#111827] focus:ring-2 focus:ring-orange-100 transition-all" />
                      </div>

                      <div className="bg-purple-50/50 border border-purple-100 rounded-[20px] p-6">
                         <h4 className="text-[12px] font-black text-[#7c3aed] uppercase tracking-wider mb-2">Password Requirements:</h4>
                         <ul className="text-[12px] font-bold text-gray-500 space-y-1.5 list-disc pl-4">
                            <li>At least 8 characters</li>
                            <li>One uppercase letter</li>
                            <li>One number</li>
                         </ul>
                      </div>

                      <div className="flex items-center space-x-4 pt-4">
                        <button className="flex-1 py-5 bg-orange-200 text-white rounded-[22px] font-black text-[16px] flex items-center justify-center cursor-not-allowed">
                           <Lock className="w-4 h-4 mr-2.5" />
                           Update Password
                        </button>
                        <button 
                          onClick={() => setProfileView('view')}
                          className="px-10 py-5 bg-white border border-gray-200 text-gray-500 rounded-[22px] font-black text-[15px] hover:bg-gray-50 transition-all"
                        >
                          Cancel
                        </button>
                      </div>
                   </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Placeholder for other tabs */}
        {activeTab !== 'Orders' && activeTab !== 'Profile' && (
          <div className="py-20 text-center animate-in fade-in zoom-in-95 duration-500">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
              <User className="w-10 h-10" />
            </div>
            <h2 className="text-[24px] font-black text-gray-900 mb-2">{activeTab} Section</h2>
            <p className="text-gray-400 max-w-[400px] mx-auto">This section is currently under development. Please check back later for updates.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;

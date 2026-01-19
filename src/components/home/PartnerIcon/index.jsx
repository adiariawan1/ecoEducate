import React from 'react';
import EachUtils from '../../../utils/EachUtils';


const PartnersSection = () => {
    const partners = [
    { 
      id: 1, 
      name: "Care", 
      // Icon: Hands Holding Heart
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          <path d="M12 23c-1.5 0-2.5-.5-3.5-1.5-.5-.5-1-1.5-1-2.5h2c0 .5.5 1 1 1.5.25.25.5.5 1.5.5s1.25-.25 1.5-.5c.5-.5 1-1 1-1.5h2c0 1-.5 2-1 2.5-1 1-2 1.5-3.5 1.5z" opacity="0.3"/>
        </svg>
      )
    },
    { 
      id: 2, 
      name: "Red Cross", 
      // Icon: Red Cross (Plus Sign)
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        </svg>
      )
    },
    { 
      id: 3, 
      name: "United Nations", 
      // Icon: Globe / UN Symbol (Simplified)
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      )
    },
    { 
      id: 4, 
      name: "Red Crescent", 
      // Icon: Crescent Moon
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-11 h-11 -rotate-12">
          <path d="M12 2C9.5 2 7.2 3 5.5 4.5 8 6 9.5 8.8 9.5 12s-1.5 6-4 7.5C7.2 21 9.5 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
        </svg>
      )
    },
    { 
      id: 5, 
      name: "Solidarity", 
      // Icon: Helping Hands
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      )
    },
  ];
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        
        <p className="text-center text-gray-400 text-sm font-semibold uppercase tracking-widest mb-8">
            Didukung oleh berbagai organisasi terpercaya
        </p>

        {/* LOGO GRID */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-35 opacity-60 ">
            <EachUtils of={partners} render={(item, index) =>(
            <div 
              key={item.id} 
              className="text-gray-400 hover:text-gray-600 transition duration-300 transform hover:scale-110 cursor-pointer flex items-center justify-center"
              title={item.name}
            >
              {item.icon}
            </div>
            )}/>
        </div>

      </div>
    </section>
  );
};

export default PartnersSection;
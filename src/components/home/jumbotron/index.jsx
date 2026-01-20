import React, { useState, useEffect } from 'react';
import SectionLayout from '../../layouts/sectionLayouts';
import EachUtils from '../../../utils/EachUtils';

import { api } from '../../../service/api';
import { staticHeroData } from '../../../data/data';

const Jumbotron = () => {
  
  const [statsValues, setStatsValues] = useState({ money: 0, people: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      
      const data = await api.getDonationStats();
      setStatsValues(data);
      setLoading(false);
    };

    fetchStats();
  }, []);


  const combinedStats = staticHeroData.statsStructure.map((item) => {
    let value = 0;
    
    
    if (item.id === 'money') {
      value = `$${statsValues.money.toLocaleString('en-US')}`;
    } else if (item.id === 'people') {
      value = statsValues.people.toLocaleString('en-US');
    }

    return { ...item, value }; 
  });
 // DATA PARTNER ICON
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
    // <SectionLayout className="pt-24 pb-6 h-screen flex flex-col">
    <section  >
            <div className="relative w-full h-full bg-gray-900  overflow-hidden flex items-center shadow-2xl shadow-emerald-900/20">
            

            {/* Background Image */}
            <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1470&auto=format&fit=crop" 
                alt="Background" 
                className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

            {/* Konten */}
            <div className="relative z-10 w-full px-6 md:px-16 mt-20">
                <div className="max-w-3xl">
                    
                    
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        {staticHeroData.title}
                    </h1>
                    
                    <p className="text-gray-300 text-lg md:text-xl mb-10 border-l-4 border-orange-500 pl-6 max-w-lg">
                        {staticHeroData.description}
                    </p>

                    
                    <div className="flex flex-wrap items-center gap-12 mb-12">
                        {loading ? (
                          <span className="text-white">Loading stats...</span>
                        ) : (
                          <EachUtils 
                              of={combinedStats} 
                              render={(item, index) => (
                                  <div key={index}>
                                      <span className={`block text-4xl font-bold ${item.color}`}>
                                          {item.value} 
                                      </span>
                                      <span className="text-gray-400 text-sm uppercase font-semibold">
                                          {item.label} 
                                      </span>
                                  </div>
                              )}
                          />
                        )}
                    </div>

                    
                    <div className="flex flex-wrap gap-8 opacity-50 mb-15">
                        <EachUtils 
                            of={partners}
                            render={(item, index) => (
                                <div key={index} className="flex items-center gap-2 text-white font-bold text-lg">
                                    {item.icon}
                                </div>
                            )}
                        />
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Jumbotron;
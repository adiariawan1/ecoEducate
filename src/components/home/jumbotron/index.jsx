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

  return (
    <SectionLayout className="pt-24 pb-6 h-screen flex flex-col">
        
        <div className="relative w-full h-full bg-gray-900 rounded-3xl overflow-hidden flex items-center shadow-2xl shadow-emerald-900/20">
            

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

                    
                    <div className="flex flex-wrap gap-8 opacity-50">
                        <EachUtils 
                            of={staticHeroData.logos}
                            render={(item, index) => (
                                <div key={index} className="flex items-center gap-2 text-white font-bold text-lg">
                                    <div className="w-6 h-6 rounded-full border-2 border-white"></div> 
                                    {item.name}
                                </div>
                            )}
                        />
                    </div>

                </div>
            </div>
        </div>
    </SectionLayout>
  )
}

export default Jumbotron;
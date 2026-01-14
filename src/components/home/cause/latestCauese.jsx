import React from 'react'
import { ArrowRight } from 'lucide-react'
import EachUtils from '../../../utils/EachUtils'
import CardItem from '../../home/cardItems'
import { useState, useEffect } from 'react'
import {api} from '../../../service/api'

const LatestCauses = () => {
   const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // State Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 9; 

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data, totalItems } = await api.getCampaigns(currentPage, itemsPerPage);
      
      setCampaigns(data);
      setTotalPages(Math.ceil(totalItems / itemsPerPage));
      setLoading(false);
    };

    fetchData();
  }, [currentPage]);
  return (
    <section className='py-24 bg-gray-50'>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 px-2">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-2">Kampanye</h2>
          <p className="text-gray-500 max-w-lg">
             Temukan berbagai program kebaikan yang membutuhkan uluran tanganmu hari ini.
          </p>
        </div>
        <button className="hidden md:flex items-center gap-2 border border-slate-900 px-6 py-3 rounded-full font-bold hover:bg-slate-900 hover:text-white transition">
          Lihat Semua <ArrowRight size={18} />
        </button>
      </div>

      {loading ? (
        <div className="text-center py-20">Loading Kampanye</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          
          <EachUtils
            of={campaigns}
            render={(item, index) => (
              
              <CardItem key={index} item={item} />
            )}
          />

        </div>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-16">
          <button 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white disabled:opacity-30 transition"
          >
            &lt;
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`w-10 h-10 rounded-full font-bold transition duration-300 ${
                currentPage === number 
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                  : 'bg-white text-gray-500 hover:bg-gray-100'
              }`}
            >
              {number}
            </button>
          ))}

          <button 
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white disabled:opacity-30 transition"
          >
            &gt;
          </button>
        </div>
    )}
    </section>
  )
}

export default LatestCauses
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import EachUtils from '../../../utils/EachUtils';
import CardItem from '../../home/cardItems';
import { api } from '../../../service/api';
import { useSearchParams } from 'react-router-dom';

const LatestCauses = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // State Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 9; 

  // State search query from URL
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  // 1. EFFECT PERTAMA: Reset halaman ke 1 jika kata kunci pencarian berubah
  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  // 2. EFFECT KEDUA: Ambil data dari API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data, totalItems } = await api.getCampaigns(currentPage, itemsPerPage, query);
        
        setCampaigns(data);
        setTotalPages(Math.ceil(totalItems / itemsPerPage));
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, query]);

  return (
    // UBAH 1: Padding lebih proporsional (py-12 di mobile, py-24 di desktop)
    <section className='py-12 md:py-24 bg-gray-50'>
      
      {/* Container Header */}
      <div className="container mx-auto px-4 mb-10 md:mb-16">
        <div className="flex flex-col items-center justify-center text-center">
          {/* UBAH 2: Font size responsif (text-3xl di mobile) */}
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            {query ? `Hasil Pencarian: "${query}"` : "Kampanye"}
          </h2>
          <p className="text-gray-500 max-w-lg text-sm md:text-base leading-relaxed">
             {query 
                ? "Berikut adalah kampanye yang cocok dengan pencarianmu." 
                : "Temukan berbagai program kebaikan yang membutuhkan uluran tanganmu hari ini."
             }
          </p>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-20 flex justify-center items-center gap-2">
           <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
           <span className="text-gray-500 font-medium">Loading Kampanye...</span>
        </div>
      ) : (
        <div className="container mx-auto px-4">
            {/* UBAH 3: Grid gap disesuaikan (gap-6 di mobile) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            
            {campaigns.length > 0 ? (
                <EachUtils
                    of={campaigns}
                    render={(item, index) => (
                    <CardItem key={index} item={item} />
                    )}
                />
            ) : (
                <div className="col-span-full text-center py-12 bg-white rounded-2xl border border-gray-100 mx-4">
                    <p className="text-gray-500">Tidak ditemukan kampanye dengan kata kunci <strong className="text-slate-900">"{query}"</strong>.</p>
                </div>
            )}

            </div>
        </div>
      )}

      {/* PAGINATION SECTION */}
      {totalPages > 0 && (
        <div className="flex flex-col items-center mt-12 md:mt-16 px-4">
          
          <div className="flex items-center gap-3 bg-white p-2 rounded-full shadow-sm border border-gray-100">
            {/* Tombol PREV */}
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-400 transition"
            >
              &lt;
            </button>

            
            
            <div className="hidden md:flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <button
                  key={number}
                  onClick={() => setCurrentPage(number)}
                  className={`w-10 h-10 rounded-full font-bold transition duration-300 text-sm ${
                    currentPage === number 
                      ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30'
                      : 'bg-transparent text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  {number}
                </button>
              ))}
            </div>

            
            <div className="md:hidden px-4">
                <span className="text-sm font-semibold text-slate-700">
                    Page {currentPage} of {totalPages}
                </span>
            </div>

            {/* Tombol NEXT */}
            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-400 transition"
            >
              &gt;
            </button>
          </div>

        </div>
      )}
    
    </section>
  )
}

export default LatestCauses;
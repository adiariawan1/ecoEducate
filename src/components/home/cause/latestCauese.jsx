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
  // (Dipisah agar tidak bentrok dengan fetch data)
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
  }, [currentPage, query]); // Dijalankan saat halaman ganti ATAU kata kunci ganti

  return (
    <section className='pb-24 pt-5 bg-gray-50'>
      <div className="flex flex-col md:flex-row justify-center items-center mb-15 px-2">
        <div>
          {/* Judul dinamis sesuai pencarian */}
          <h2 className="text-4xl font-bold text-slate-900 mb-2 text-center">
            {query ? `Hasil Pencarian: "${query}"` : "Kampanye"}
          </h2>
          <p className="text-gray-500 max-w-lg text-center">
             {query 
                ? "Berikut adalah kampanye yang cocok dengan pencarianmu." 
                : "Temukan berbagai program kebaikan yang membutuhkan uluran tanganmu hari ini."
             }
          </p>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-20 flex justify-center items-center gap-2">
           <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-orange-500"></div>
           Loading Kampanye...
        </div>
      ) : (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {campaigns.length > 0 ? (
                <EachUtils
                    of={campaigns}
                    render={(item, index) => (
                    <CardItem key={index} item={item} />
                    )}
                />
            ) : (
                <div className="col-span-full text-center py-10 text-gray-500">
                    <p>Tidak ditemukan kampanye dengan kata kunci <strong>"{query}"</strong>.</p>
                </div>
            )}

            </div>
        </div>
      )}

      {totalPages > 0 && (
        <div className="flex justify-center items-center gap-2 mt-16">
          <button 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white disabled:opacity-30 transition"
          >
            &lt;
          </button>

          {/* Logic Pagination Sederhana */}
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

export default LatestCauses;
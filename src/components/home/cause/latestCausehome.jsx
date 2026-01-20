import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import EachUtils from '../../../utils/EachUtils';
import CardItem from '../../home/cardItems';
import { api } from '../../../service/api';

const LatestCausehome = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        setLoading(true);
        // Mengambil 6 kampanye terbaru (Page 1, Limit 6)
        const { data } = await api.getCampaigns(1, 6); 
        setCampaigns(data);
      } catch (error) {
        console.error("Gagal ambil data home:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatest();
  }, []);

  return (
    // UBAH 1: Padding disesuaikan (py-12 untuk mobile, py-24 untuk desktop)
    <section className='py-12 md:py-24 bg-gray-50'>
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        {/* UBAH 2: Flexbox diatur agar center di mobile, dan row di desktop */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 md:mb-12 gap-4">
          
          <div className="md:w-2/3 text-center md:text-left">
            {/* UBAH 3: Ukuran font disesuaikan agar tidak kegedean di HP */}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-2">
              Kampanye Terakhir
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto md:mx-0 text-sm md:text-base">
              Temukan program terbaru yang membutuhkan uluran tanganmu.
            </p>
          </div>
          
          {/* Tombol Desktop (Hidden di Mobile) */}
          <Link 
            to="/Kampanye" 
            className="hidden md:flex items-center gap-2 border border-slate-900 px-6 py-3 rounded-full font-bold hover:bg-slate-900 hover:text-white transition group"
          >
              Lihat Semua 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
          </Link>
        </div>

        {/* Content Section */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
             <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-orange-500"></div>
          </div>
        ) : (
          // Grid Layout: 1 kolom (Mobile), 2 kolom (Tablet), 3 kolom (Desktop)
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <EachUtils
              of={campaigns}
              render={(item, index) => (
                // Pastikan key unik
                <CardItem key={item.id || index} item={item} />
              )}
            />
          </div>
        )}

        {/* Mobile Button (Muncul HANYA di Mobile) */}
        <div className="mt-10 md:hidden flex justify-center">
            <Link 
              to="/campaigns" 
              className="flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition shadow-lg"
            >
                Lihat Semua <ArrowRight size={18} />
            </Link>
        </div>

      </div>
    </section>
  )
}

export default LatestCausehome;
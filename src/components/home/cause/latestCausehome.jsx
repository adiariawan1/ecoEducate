import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import EachUtils from '../../../utils/EachUtils' // Sesuaikan path jika perlu
import CardItem from '../../home/cardItems'      // Sesuaikan path jika perlu
import { api } from '../../../service/api'      // Sesuaikan path jika perlu

const LatestCausehome = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        setLoading(true);
        
      
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
    <section className='pb-24 pt-5 bg-gray-50'>
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="md:w-2/3">
            <h2 className="text-4xl font-bold text-slate-900 mb-2">Kampanye Terakhir</h2>
            <p className="text-gray-500 max-w-lg">
              Temukan 6 program terbaru yang membutuhkan uluran tanganmu.
            </p>
          </div>
          
          <Link to="/Kampanye" className="hidden md:flex items-center gap-2 border border-slate-900 px-6 py-3 rounded-full font-bold hover:bg-slate-900 hover:text-white transition">
             Lihat Semua <ArrowRight size={18} />
          </Link>
        </div>

        {/* Content Section */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EachUtils
              of={campaigns}
              render={(item, index) => (
                // Gunakan ID sebagai key jika ada, fallback ke index
                <CardItem key={item.id || index} item={item} />
              )}
            />
          </div>
        )}

        {/* Mobile Button */}
        <div className="mt-10 md:hidden flex justify-center">
            <Link to="/campaigns" className="flex items-center gap-2 border border-slate-900 px-6 py-3 rounded-full font-bold hover:bg-slate-900 hover:text-white transition">
                Lihat Semua <ArrowRight size={18} />
            </Link>
        </div>

      </div>
    </section>
  )
}

export default LatestCausehome
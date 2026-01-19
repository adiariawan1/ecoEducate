import React, { useEffect, useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react'; 
import { externalApi } from '../../../service/externalApi'; 

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const articles = await externalApi.getLatestNews();
      setNews(articles);
      setLoading(false);
    };

    fetchNews();
  }, []);

  // Format Tanggal Indonesia (Contoh: 20 Januari 2026)
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('id-ID', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* HEADER: JUDUL & TOMBOL */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
          <div>
            <h2 className="text-4xl font-bold text-slate-900">Berita & Artikel</h2>
            <p className="text-gray-500 mt-2">Update terbaru seputar lingkungan dan kegiatan sosial.</p>
          </div>
          
          <a 
            href="https://news.google.com/search?q=lingkungan+indonesia&hl=id-ID&gl=ID&ceid=ID:id" 
            target="_blank" 
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 border border-slate-900 px-6 py-3 rounded-full font-bold hover:bg-slate-900 hover:text-white transition mt-4 md:mt-0"
          >
            LIHAT SEMUA BERITA
          </a>
        </div>

        {/* CONTENT: GRID BERITA */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden group shadow-sm hover:shadow-lg transition duration-300 border border-gray-100">
                
                {/* GAMBAR BERITA */}
                <div className="h-56 overflow-hidden relative mb-4">
                  <img 
                    src={item.image || "https://via.placeholder.com/400x300?text=No+Image"} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-in-out"
                  />
                  {/* Badge Sumber Berita (Contoh: Kompas, Detik) */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                    {item.source.name}
                  </div>
                </div>

                {/* INFO BERITA */}
                <div className="flex flex-col h-full p-6 pt-0">
                  {/* Tanggal */}
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <Calendar size={16} className="mr-2" />
                    {formatDate(item.publishedAt)}
                  </div>

                  {/* Judul */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-orange-500 transition line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Deskripsi */}
                  <p className="text-gray-500 mb-6 line-clamp-3 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tombol Baca Selengkapnya */}
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="mt-auto flex items-center font-bold text-slate-900 group-hover:text-orange-500 transition uppercase text-sm tracking-wider"
                  >
                    BACA SELENGKAPNYA <ArrowRight size={16} className="ml-2 text-orange-500 group-hover:translate-x-1 transition duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Jika Berita Kosong */}
        {!loading && news.length === 0 && (
            <div className="text-center py-10 text-gray-400">
                Tidak ada berita terbaru saat ini.
            </div>
        )}
        
        {/* Tombol Mobile */}
        <div className="mt-8 md:hidden flex justify-center">
            <a href="https://news.google.com/search?q=lingkungan" className="border border-slate-900 px-6 py-3 rounded-full font-bold uppercase text-sm w-full text-center">
                Lihat Semua Berita
            </a>
        </div>

      </div>
    </section>
  );
};

export default NewsSection;
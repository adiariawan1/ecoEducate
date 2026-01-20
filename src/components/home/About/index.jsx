import React from "react";

const About = () => {
  return (
    <section className="relative min-h-screen bg-white flex items-center py-16">
      
      {/* PERUBAHAN DI SINI:
          1. Ganti 'container' dengan 'max-w-7xl' (biar lebih lebar maksimalnya)
          2. Kurangi 'lg:px-20' menjadi 'px-6 lg:px-8' (biar tidak terlalu menjorok ke dalam) 
      */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Halaman (Kosong sesuai request) */}
        <div className="text-center mb-12"></div>

        {/* Grid Layout */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Foto Kiri */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img
                src="https://asset.kompas.com/crops/baLW8-xjtoksLpBQMNKctLmSnmM=/0x0:0x0/750x500/data/photo/2021/06/13/60c5b5021469f.jpg"
                alt="Tentang Kami"
                className="rounded-2xl shadow-xl w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Deskripsi Kanan */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 leading-tight">
              Membangun{" "}
              <span className="text-orange-500 font-bold">
                Masa Depan
              </span>{" "}
              yang Lebih Baik
            </h2>
            
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Kami adalah organisasi nirlaba yang berdedikasi untuk memberikan
              dampak positif bagi masyarakat. Berawal dari kepedulian kecil,
              kini kami telah membantu ratusan orang dalam mendapatkan akses
              kesehatan dan pendidikan yang lebih layak.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Misi kami adalah menjembatani antara para donatur dengan mereka
              yang membutuhkan secara transparan dan amanah. Kami percaya bahwa
              setiap kontribusi, sekecil apapun, dapat menciptakan perubahan
              besar.
            </p>

            {/* List Poin */}
            <ul className="space-y-4">
              <li className="flex items-center text-slate-700 text-lg">
                <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mr-4 text-sm font-bold flex-shrink-0">
                  ✓
                </span>
                Transparansi Dana 100%
              </li>
              <li className="flex items-center text-slate-700 text-lg">
                <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mr-4 text-sm font-bold flex-shrink-0">
                  ✓
                </span>
                Penyaluran Tepat Sasaran
              </li>
              <li className="flex items-center text-slate-700 text-lg">
                <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mr-4 text-sm font-bold flex-shrink-0">
                  ✓
                </span>
                Update Laporan Berkala
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
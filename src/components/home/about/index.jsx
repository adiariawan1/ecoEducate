import React from "react";

const About = () => {
  return (
    <section className="pt-32 pb-16 min-h-screen">
      <div className="container mx-auto px-4 lg:px-20">
        {/* Header Halaman */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-2 text-white">
            Tentang Kami
          </h1>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        {/* grid */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* foto kiri */}
          <div className="w-full md:w-1/2 md:pr-14 lg:pr-18">
            <div className="relative">
              {/* dekorasi foto */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-orange-600 rounded-2xl blur-sm -z-10"></div>

              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Tentang Kami"
                className="rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.18)]  w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* deskripsi */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-slate-700 mb-4 text-white">
              Membangun Masa Depan yang Lebih Baik
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6 text-white">
              Kami adalah organisasi nirlaba yang berdedikasi untuk memberikan
              dampak positif bagi masyarakat. Berawal dari kepedulian kecil,
              kini kami telah membantu ratusan orang dalam mendapatkan akses
              kesehatan dan pendidikan yang lebih layak.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8 text-white">
              Misi kami adalah menjembatani antara para donatur dengan mereka
              yang membutuhkan secara transparan dan amanah. Kami percaya bahwa
              setiap kontribusi, sekecil apapun, dapat menciptakan perubahan
              besar.
            </p>

            {/* list poin */}
            <ul className="space-y-3">
              <li className="flex items-center text-slate-700 text-white">
                <span className="w-6 h-6 bg-green-100 text-orange-600 rounded-full flex items-center justify-center mr-3 text-sm">
                  ✓
                </span>
                Transparansi Dana 100%
              </li>
              <li className="flex items-center text-slate-700 text-white">
                <span className="w-6 h-6 bg-green-100 text-orange-600 rounded-full flex items-center justify-center mr-3 text-sm">
                  ✓
                </span>
                Penyaluran Tepat Sasaran
              </li>
              <li className="flex items-center text-slate-700 text-white">
                <span className="w-6 h-6 bg-green-100 text-orange-600 rounded-full flex items-center justify-center mr-3 text-sm">
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

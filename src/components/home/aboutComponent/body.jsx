import React from "react";

const BodyAbout = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-stretch gap-16 lg:gap-24">
          {/* BAGIAN KIRI (GAMBAR) */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                className="w-full h-full object-cover hover:scale-110 transition duration-700"
                src="https://images.unsplash.com/photo-1706877324142-606119530cbe?q=80&w=880&auto=format&fit=crop"
                alt="hand-shake"
              />
              <div className="inset-0 bg-black/10"></div>
            </div>
          </div>

          {/* BAGIAN KANAN (TEKS) */}
          {/* PERUBAHAN DISINI: 
              1. Hapus 'justify-center' (agar tidak di tengah vertikal)
              2. Tambahkan 'pt-4' atau 'pt-2' jika ingin turun sedikit saja dari garis atas gambar
          */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-8 text-slate-900 leading-tight">
              Buat Perubahan, <br />
              Bantu Mereka Yang Membutuhkan.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-500 leading-relaxed text-sm lg:text-base">
              <div>
                <p className="mb-4">
                  Perubahan selalu dimulai dari kepedulian terhadap sesama. Saat
                  kita peka terhadap sekitar, langkah kecil pun bisa memberi
                  arti besar.
                </p>
                <p>
                  Membantu mereka yang membutuhkan bukan hanya tentang memberi,
                  tetapi tentang menghadirkan harapan. Dukungan sederhana dapat
                  meringankan beban.
                </p>
              </div>

              <div>
                <p className="mb-4">
                  Ketika kepedulian berubah menjadi tindakan, dampaknya terasa
                  nyata. Bersama, kita bisa menciptakan perubahan yang lebih
                  luas dan berkelanjutan.
                </p>
                <p>
                  Dengan saling membantu dan bergerak bersama, kita membangun
                  masa depan yang lebih baik. Karena perubahan terbaik lahir
                  dari kebersamaan dan niat yang tulus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BodyAbout;

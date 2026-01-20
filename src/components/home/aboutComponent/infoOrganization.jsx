import React from "react";
import { Heart, Eye, HandHeart } from "lucide-react";

const InfoOrganization = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* konten kiri */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-8 text-slate-900 leading-tight">
              Tentang Organisasi Kami
            </h2>
            <div className="space-y-10">
              {/* item 1 */}
              <div className="flex gap-6 ">
                <div className="flex-shrink-0 ">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg bg-orange-100">
                    <Heart size={40} className="text-orange-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Misi Kami
                  </h3>
                  <p className="text-slate-500 leading-relaxed">
                    Menyalurkan kepedulian melalui aksi nyata yang berdampak
                    langsung bagi mereka yang membutuhkan. Kami berkomitmen
                    untuk hadir, membantu, dan menjadi bagian dari solusi yang
                    berkelanjutan.
                  </p>
                </div>
              </div>
              {/* item 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg bg-orange-100">
                    <Eye size={40} className="text-orange-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Visi Kami
                  </h3>
                  <p className="text-slate-500 leading-relaxed">
                    Mewujudkan masyarakat yang saling peduli, inklusif, dan
                    berdaya. Kami percaya bahwa kebersamaan adalah fondasi utama
                    untuk menciptakan perubahan yang lebih baik.
                  </p>
                </div>
              </div>
              {/* item 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg bg-orange-100">
                    <HandHeart size={40} className="text-orange-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Nilai Kami
                  </h3>
                  <p className="text-slate-500 leading-relaxed">
                    Kepedulian, kejujuran, dan kolaborasi menjadi nilai yang
                    kami pegang. Dengan niat tulus dan tanggung jawab bersama,
                    setiap langkah yang diambil memiliki arti dan tujuan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* konten kanan */}
          <div className="w-full lg:w-1/2 flex gap-6 h-[500px] lg:h-[600px]">
            <div className="w-1/2 h-full rounded-3xl overflow-hidden shadow-xl">
              <img
                className="w-full h-full object-cover hover:scale-110 transition duration-700"
                src="https://images.unsplash.com/photo-1732919258502-023e94fc1109?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="foto1"
              />
            </div>
            <div className="w-1/2 h-full rounded-3xl overflow-hidden shadow-xl mt-12 lg:mt-0">
              <img
                className="w-full h-full object-cover hover:scale-110 transition duration-700"
                src="https://plus.unsplash.com/premium_photo-1681152781070-7c279db690e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoOrganization;

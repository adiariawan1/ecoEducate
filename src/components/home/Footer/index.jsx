import React from "react";
import { useEffect, useState } from "react";
import EachUtils from "../../../utils/EachUtils";
import { api } from "../../../service/api";
import { Link } from "react-router-dom"; // Opsional: Jika menggunakan React Router

const Footer = () => {
  const [galery, setGalery] = useState([]);

  useEffect(() => {
    const factGalery = async () => {
      try {
        const data = await api.getGallery();
        setGalery(data.slice(0, 6));
      } catch (error) {
        console.error("Gagal ambil data!", error);
      }
    };
    factGalery();
  }, []);

  return (
    // UBAH 1: Padding atas-bawah disesuaikan (py-12 untuk mobile, pt-24 untuk desktop)
    <footer className="bg-black text-gray-300 py-12 lg:pt-24 lg:pb-10">
      
      {/* UBAH 2: Gap antar kolom dikecilkan di mobile (gap-8) */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
        
        {/* KOLOM 1: Brand & Info */}
        <div className="space-y-4">
          <img
            src="eco-logo-white.png"
            alt="EcoEducate"
            width={155}
            height={140}
            className="mb-4"
          />
          <p className="text-gray-400 text-sm leading-relaxed">
            Ayo lindungi bumi ini dan sesama demi keberlanjutan masa depan yang lebih baik.
          </p>
          <div className="space-y-2 text-sm pt-2">
            <p>
              <span className="text-white font-semibold block">WhatsApp:</span> 
              (+62) 815-2964-0581
            </p>
            <p>
              <span className="text-white font-semibold block">Address:</span> 
              JL. Raya Puputan, Dangin Puri Kelod, Denpasar, Bali
            </p>
          </div>
        </div>

        {/* KOLOM 2: Tentang Kami */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4 border-b border-gray-800 pb-2 inline-block lg:border-none lg:pb-0">
            Tentang Kami
          </h4>
          <ul className="space-y-3 text-sm">
            {/* Tambahkan hover effect agar interaktif */}
            <li className="hover:text-orange-500 transition-colors cursor-pointer">Tentang kami</li>
            <li className="hover:text-orange-500 transition-colors cursor-pointer">Kampanye</li>
            <li className="hover:text-orange-500 transition-colors cursor-pointer">Volunteers</li>
            <li className="hover:text-orange-500 transition-colors cursor-pointer">Mitra</li>
            <li className="hover:text-orange-500 transition-colors cursor-pointer">Kontak kami</li>
          </ul>
        </div>

        {/* KOLOM 3: Tautan Berguna */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4 border-b border-gray-800 pb-2 inline-block lg:border-none lg:pb-0">
            Tautan Berguna
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-orange-500 transition-colors cursor-pointer">F.A.Q</li>
            <li className="hover:text-orange-500 transition-colors cursor-pointer">Berita</li>
            <li className="hover:text-orange-500 transition-colors cursor-pointer">Ketentuan Pengguna</li>
            <li className="hover:text-orange-500 transition-colors cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* KOLOM 4: Galeri */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4 border-b border-gray-800 pb-2 inline-block lg:border-none lg:pb-0">
            Galeri
          </h4>
          <div className="grid grid-cols-3 gap-2">
            <EachUtils
              of={galery}
              render={(item, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-md bg-gray-800 relative group aspect-square" // UBAH 3: aspect-square agar kotak sempurna
                >
                  <img
                    src={item.image_url}
                    alt={item.title || "Gallery Image"}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
              )}
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-10 pt-8">
        <p className="text-center text-gray-500 text-sm">
          © Copyright EcoEducate 2026. Created by adi, thoriq and egik.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
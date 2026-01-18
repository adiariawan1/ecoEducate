import React from "react";
import SectionLayout from "../../layouts/sectionLayouts/index";



const OurGalery = () => {

  return (
    <SectionLayout className="mt-30 bg-white p-2">
      {/* HEADER */}
      <div className="text-center mt-12 max-w-3xl mx-auto mb-24">
        <p className="text-gray-500 text-sm font-medium mb-4 uppercase tracking-wide">
          Beranda <span className="mx-2 text-black">/ galeri kami</span>
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Momen Terbaik Bersama Kami!
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed">
          Jelajahi momen-momen terbaik bersama ECOEDUCATE. 
          Di sini kami mengabadikan kegiatan, kolaborasi, dan cerita inspiratif 
          yang menjadi bagian dari perjalanan komunitas kami.
        </p>
      </div>

      {/* GALERI FOTO */}
<div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-24">
  {[
    {
      image_url: "https://img.antaranews.com/cache/1200x800/2020/06/01/Screenshot_20200601-082804_Instagram.jpg.webp",
      title: "Istri Adi yang imut",
    },
    {
      image_url: "https://www.attitude.co.uk/wp-content/uploads/sites/5/2018/03/fs_mag2.jpg",
      title: "2 Istri Thoriq yang lagi bermesra mesraan",
    },
    {
      image_url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjj0q2cmXdPOc_zOyYOt52g8NGcLV7LqqjM5JrhQuPPdyYT9HjFGe7JR2mNUs1vAfJmi_KQKzs7b-CyA14BnEGKvyT5tSvbzkR6sVfu_gehocOaxIiAktiPB-1oofJbffBybrKJ-qi4_i4/s1600/Lisa-BLACKPINK.png",
      title: "Istri Egik",
    }
   
  ].map((item, index) => (
    <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col h-full">
      <div className="h-64 overflow-hidden relative">
        <img
          src={item.image_url}
          alt={item.title}
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-1">
          {item.title}
        </h3>
      </div>
    </div>
  ))}
</div>

      

     
    </SectionLayout>
  );
};

export default OurGalery;

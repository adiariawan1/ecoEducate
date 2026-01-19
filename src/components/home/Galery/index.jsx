import React, { useEffect, useState } from "react";
import SectionLayout from "../../layouts/sectionLayouts/index";
import HeaderGalery from "./Header";
import { api } from "../../../service/api";
import EachUtils from "../../../utils/EachUtils";


const OurGalery = () => {
  const [galery, setGalery] = useState([])
  useEffect(()=> {
    const factGalery=async() =>{
      try {
        const data = await api.getGallery()
        setGalery(data.slice(0,6))
      } catch (error) {
        console.error("Gagal ambil data!", error)
      }
    }
    factGalery()
  },[])
  return (

    <section className="bg-white p-2">
      <HeaderGalery/>
      {/* GALERI FOTO */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-24">
        <EachUtils of={galery} render={(item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col h-full"
          >
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
        )}/>
      </div>
    </section>
  );
};


export default OurGalery;
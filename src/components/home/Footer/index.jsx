import React from "react";
import { useEffect, useState } from "react";
import EachUtils from "../../../utils/EachUtils";
import { api } from "../../../service/api";

const Footer = () => {
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
    <footer className="bg-black text-gray-300 pt-25 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

        <div>
          <img src="eco-logo-white.png" alt="EcoEducate" width={155} height={140}  className="pb-8"/>
          <p className="text-gray-400 mb-6">
            ayo lindungi bumi ini dan sesama demi keberlanjutan.
          </p>
          <p className="text-sm">
            <span className="text-white">No. WA :</span> (+62) 815-2964-0581
          </p>
          <p className="text-sm">
            <span className="text-white">Address:</span> JL.Raya Puputan,Dangin Puri Kelod, Denpasar,Bali
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Tentang Kami</h4>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Causes</li>
            <li>Volunteers</li>
            <li>Partners</li>
            <li>Contact Us</li>
          </ul>
        </div>
  

        <div>
          <h4 className="text-white font-semibold mb-4">Tautan Berguna</h4>
          <ul className="space-y-2">
            <li>F.A.Q</li>
            <li>News</li>
            <li>Reports</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Galery</h4>
          <div className="grid grid-cols-3 gap-3">
            <EachUtils of={galery} render={(item, index) => (
          <div
            key={index}
            className="overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col h-full">
            <div className="h-18 overflow-hidden relative">
              <img
                src={item.image_url}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
          </div>
        )}/>
          </div>
        </div>

      </div>

      <p className="text-center text-gray-500 mt-16 text-sm">
        © Copyright EcoEducate 2026. Ide by Adi Senpai
      </p>
    </footer>
  );
};

export default Footer;

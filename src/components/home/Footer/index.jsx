import React from "react";
import EachUtils from "../../../utils/EachUtils";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-25 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

        <div>
          <h3 className="text-white text-2xl font-bold mb-4">EcoEducate</h3>
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
          <h4 className="text-white font-semibold mb-4">Penyebab</h4>
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-20 bg-gray-700 rounded-lg" />
            ))}
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

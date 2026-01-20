import React from "react";
import EachUtils from "../../../utils/EachUtils";
import { causesData } from "../../../data/cause";
import { Book, Droplets, Heart, Activity } from "lucide-react";

const iconMap = {
  book: <Book size={48} strokeWidth={1.5} />,
  water: <Droplets size={48} strokeWidth={1.5} />,
  health: <Heart size={48} strokeWidth={1.5} />,
  community: <Activity size={48} strokeWidth={1.5} />,
};

const HeaderCauses = () => {
  return (

    <section className="py-12 md:py-20 bg-white">
      

      <div className="container mx-auto px-4">
        

        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <p className="text-gray-500 text-xs md:text-sm font-medium mb-4 uppercase tracking-wide">
            Beranda <span className="mx-2 text-black">/ Kampanye</span>
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
            Ayo Bantu Wujudkan Perubahan Bersama Kami
          </h2>
          
          <p className="text-gray-500 text-base md:text-lg leading-relaxed px-2 md:px-0">
            Julurkan tangan dan buat perubahan nyata dengan mendukung inisiatif
            kami. Setiap kontribusi Anda membawa harapan baru dan kesempatan bagi
            mereka yang membutuhkan.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <EachUtils
            of={causesData}
            render={(item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 md:p-8 text-center shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-100 hover:border-orange-500 flex flex-col items-center"
              >
                <div className="flex justify-center mb-6 text-orange-500 group-hover:scale-110 transition duration-300">
                  {iconMap[item.iconKey]}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            )}
          />
        </div>

      </div>
    </section>
  );
};

export default HeaderCauses;
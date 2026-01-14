import React from 'react'
import EachUtils from '../../../utils/EachUtils'
import { causesData } from '../../../data/cause'
import { Book, Droplets, Heart, Activity } from 'lucide-react'

const iconMap = {
    book : <Book size={48} strokeWidth={1.5} />,
    water : <Droplets size={48} strokeWidth={1.5} />,
    health : <Heart size={48} strokeWidth={1.5} />,
    community : <Activity size={48} strokeWidth={1.5} />,
}
const HeaderCauses = () => {
  return (
    <section>
        <div className='text-center max-w-3xl mx-auto mb-20'>
        <p className="text-gray-500 text-sm font-medium mb-4 uppercase tracking-wide">
          Beranda <span className="mx-2 text-black">/  Kampanye</span>
        </p>

        <h2 className='text-4xl md:text-5xl font-bold text-slate-900 mb-6'>
            Ayo Bantu Wujudkan Perubahan Bersama Kami
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed">
         julurkan tangan dan buat perubahan nyata dengan mendukung
         inisiatif kami. Setiap kontribusi Anda membawa harapan baru dan
         kesempatan bagi mereka yang membutuhkan.
        </p>
        </div>
            <div className='grid grid-cols-1 md:grid grid-cols-2 gap-4 py-2 lg:grid grid-cols-4  gap-4 py-2 '>
            <EachUtils of={causesData} render={(item, index)=>(
                <div key={index}
                className='group bg-white rounded-2xl p-8 text-center hover:shadow-2xl hover:translate-y-2 transition duration-300 border-transparent hover:border-orange-500'
                >
                    <div className='flex justify-center mb-6 text-orange-500 group-hover:scale-110 transition duration-300'
                    >{iconMap[item.iconKey]}</div>

                    <h3 className='text-xl font-bold text-slate-900 mb-3'>
                        {item.title}
                    </h3>

                    <p className='text-gray-500 text-sm leading-relaxed'>
                        {item.description}
                    </p>
                </div>
            )}/>
        </div> 
    </section>
  )
}

export default HeaderCauses
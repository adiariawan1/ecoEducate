import React from 'react';
import { Link } from 'react-router-dom';

const CardItems = ({ item }) => {
  
  const calculateProgress = (raised, target) => {
    if (!target || target === 0) return 0;
    const percent = (raised / target) * 100;
    return Math.min(percent, 100);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD',
      maximumFractionDigits: 0 
    }).format(Number(amount));
  };

  const progress = calculateProgress(item.raised_amount || 0, item.target_amount);

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col h-full">
        
        
        <div className="h-64 overflow-hidden relative">
            <img 
              src={item.image_url} 
              alt={item.title} 
              className="w-full h-full object-cover hover:scale-110 transition duration-500"
            />
        </div>
        
        
        <div className='p-8 flex flex-col flex-grow'>
            
            <h3 className='text-2xl font-bold text-slate-900 mb-3 line-clamp-1'>
                {item.title}
            </h3>
            <p className='text-gray-500 mb-6 line-clamp-2 text-sm'>
                {item.description}
            </p>

           
            <div className="w-full bg-gray-100 rounded-full h-2 mb-4 overflow-hidden">
                <div
                    className="bg-orange-500 h-2 rounded-full transition-all duration-1000" 
                    style={{ width: `${progress}%` }}>
                </div>
            </div>

           
            <div className="flex justify-between items-center text-sm font-bold text-slate-700 mb-8">
                <div>
                    <span className="text-orange-500 block text-lg">
                    {formatCurrency(item.raised_amount || 0)}
                    </span>
                    <span className="text-gray-400 font-normal text-xs uppercase">Terkumpul</span>
                </div>
                <div className="text-right">
                    <span className="block text-lg">
                    {formatCurrency(item.target_amount)}
                    </span>
                    <span className="text-gray-400 font-normal text-xs uppercase">Target</span>
                </div>
            </div>

            <Link to={`/Kampanye/${item.id}`}>
            <button className="mt-auto w-full bg-black text-white py-4 rounded-xl font-bold uppercase text-sm tracking-wider hover:bg-orange-500 transition duration-300">
                lihat detail
            </button>
            </Link>


        </div>
    </div>
  )
}

export default CardItems;
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { api } from '../../../service/api';


const createCustomIcon = (color) => {
  return new L.DivIcon({
    className: 'custom-marker',
    html: `<div style="
      background-color: ${color};
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 4px 6px rgba(0,0,0,0.3);
    "></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8], 
    popupAnchor: [0, -10]
  });
};

const orangeIcon = createCustomIcon('#f97316'); // Orange-500
const blackIcon = createCustomIcon('#0f172a');  // Slate-900

// --- KOMPONEN UTAMA ---
const ProjectsMap = () => {
  const [locations, setLocations] = useState([]);
  const [activeRegion, setActiveRegion] = useState('All');
  const [regions, setRegions] = useState(['All']);

  // Ambil data dari Supabase saat loading
  useEffect(() => {
    const fetchData = async () => {
      // Kita ambil banyak data biar map-nya ramai (misal 100 data)
      const { data } = await api.getCampaigns(1, 100);
      
      // Filter hanya data yang punya koordinat lengkap
      const validLocations = data.filter(item => item.latitude && item.longitude);
      setLocations(validLocations);

      // Ambil daftar Region unik dari data yang ada
      const uniqueRegions = ['All', ...new Set(validLocations.map(item => item.region).filter(Boolean))];
      setRegions(uniqueRegions);
    };

    fetchData();
  }, []);

  // Filter Marker berdasarkan Tab Region yang dipilih
  const filteredLocations = activeRegion === 'All' 
    ? locations 
    : locations.filter(loc => loc.region === activeRegion);

  return (
    // <SectionLayout className="py-24 bg-gray-50">
    <section className='bg-gray-100 pt-5'>
         {/* 1. HEADER & TABS */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Projects by Region</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-10">
          Lihat persebaran kebaikan yang telah kita lakukan di seluruh dunia secara realtime.
        </p>

        {/* Tab Region */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {regions.map((region, index) => (
            <button
              key={index}
              onClick={() => setActiveRegion(region)}
              className={`text-lg font-bold pb-2 transition duration-300 border-b-2 ${
                activeRegion === region 
                  ? 'text-orange-500 border-orange-500' 
                  : 'text-gray-400 border-transparent hover:text-slate-900'
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      {/* 2. PETA (LEAFLET) */}
      <div className="w-full h-[500px]  overflow-hidden shadow-xl border border-gray-100 relative z-0">
        <MapContainer 
            center={[20, 0]} 
            zoom={2} 
            scrollWheelZoom={false} 
            className="w-full h-full"
        >
          {/* TILE LAYER (Kulit Peta) - Pakai yang bersih/minimalis */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />

          {/* RENDER MARKER (PIN) */}
          {filteredLocations.map((item, index) => (
            <Marker 
                key={index} 
                position={[item.latitude, item.longitude]}
                // Jika sedang filter 'All', pakai hitam. Jika filter spesifik, pakai oranye.
                icon={activeRegion === 'All' ? blackIcon : orangeIcon}
            >
              <Popup className="custom-popup">
                <div className="text-center">
                    <img src={item.image_url} alt="project" className="w-full h-24 object-cover rounded-lg mb-2"/>
                    <h3 className="font-bold text-slate-800 text-sm">{item.title}</h3>
                    <p className="text-xs text-orange-500 font-bold uppercase mt-1">{item.region}</p>
                    <a href={`/campaign/${item.id}`} className="block mt-2 text-xs bg-black text-white py-1 rounded">Lihat Detail</a>
                </div>
              </Popup>
            </Marker>
          ))}

          {/* Helper Component: Otomatis Zoom ke area marker */}
          <AutoZoom locations={filteredLocations} />
          
        </MapContainer>
      </div>
    </section>
     

    // </SectionLayout>
  );
};

// Helper kecil untuk auto-zoom peta saat filter berubah
const AutoZoom = ({ locations }) => {
    const map = useMap();
    useEffect(() => {
        if (locations.length > 0) {
            const bounds = L.latLngBounds(locations.map(l => [l.latitude, l.longitude]));
            map.fitBounds(bounds, { padding: [50, 50], maxZoom: 6 });
        } else {
            map.setView([20, 0], 2); // Reset ke dunia jika kosong
        }
    }, [locations, map]);
    return null;
};

export default ProjectsMap;
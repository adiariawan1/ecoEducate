import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster'; 
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
      border: 2px solid white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    "></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
    popupAnchor: [0, -10]
  });
};

const orangeIcon = createCustomIcon('#f97316'); // Orange-500
const blackIcon = createCustomIcon('#0f172a');  // Slate-900

const createClusterCustomIcon = function (cluster) {
  return new L.DivIcon({
    html: `<div style="
      background-color: #f97316; 
      color: white;
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: 3px solid white;
      font-weight: bold;
      box-shadow: 0 4px 6px rgba(0,0,0,0.3);
    ">
      ${cluster.getChildCount()}
    </div>`,
    className: 'custom-cluster-marker',
    iconSize: L.point(35, 35, true),
  });
};

const ProjectsMap = () => {
  const [locations, setLocations] = useState([]);
  const [activeRegion, setActiveRegion] = useState('All');
  const [regions, setRegions] = useState(['All']);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.getCampaigns(1, 100);
        
        const validLocations = data.filter(item => item.latitude && item.longitude);
        setLocations(validLocations);

        const uniqueRegions = ['All', ...new Set(validLocations
          .map(item => item.region) 
          .filter(Boolean)          
          .map(r => r.trim())       
        )];
        
        setRegions(uniqueRegions);
      } catch (error) {
        console.error("Gagal load map data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredLocations = activeRegion === 'All' 
    ? locations 
    : locations.filter(loc => loc.region === activeRegion);

  return (
  
    <section className='bg-gray-100 py-12 md:pt-16 md:pb-20'>
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Projects by Region</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-6 text-sm md:text-base">
            Lihat persebaran kebaikan yang telah kita lakukan di seluruh dunia secara realtime.
          </p>

          
          <div className="flex overflow-x-auto pb-4 md:pb-0 justify-start md:justify-center gap-4 md:gap-10 scrollbar-hide px-2">
            {regions.map((region, index) => (
              <button
                key={index}
                onClick={() => setActiveRegion(region)}
                className={`text-base md:text-lg font-bold pb-2 transition duration-300 border-b-2 whitespace-nowrap ${
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

        
        <div className="w-full h-[300px] md:h-[500px] overflow-hidden rounded-2xl shadow-xl border border-gray-200 relative z-0">
          <MapContainer 
             center={[20, 0]} 
             zoom={2} 
             scrollWheelZoom={false} 
             dragging={true} 
             className="w-full h-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />

            <MarkerClusterGroup
              chunkedLoading
              iconCreateFunction={createClusterCustomIcon} 
            >
              {filteredLocations.map((item, index) => (
                <Marker 
                  key={index} 
                  position={[item.latitude, item.longitude]}
                  icon={activeRegion === 'All' ? blackIcon : orangeIcon}
                >
                  <Popup className="custom-popup">
                    <div className="text-center min-w-[150px]">
                      <img src={item.image_url} alt="project" className="w-full h-24 object-cover rounded-lg mb-2"/>
                      <h3 className="font-bold text-slate-800 text-sm leading-tight mb-1">{item.title}</h3>
                      <p className="text-xs text-orange-500 font-bold uppercase">{item.region}</p>
                      <a href={`/campaign/${item.id}`} className="block mt-2 text-xs bg-slate-900 text-white py-1.5 rounded font-bold hover:bg-orange-500 transition">
                        Lihat Detail
                      </a>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MarkerClusterGroup>

            <AutoZoom locations={filteredLocations} />
            
          </MapContainer>
        </div>
        
      </div>
    </section>
  );
};

// Helper Auto-Zoom
const AutoZoom = ({ locations }) => {
    const map = useMap();
    useEffect(() => {
        if (locations.length > 0) {
            const latLngs = locations.map(l => [l.latitude, l.longitude]);
            const bounds = L.latLngBounds(latLngs);
            
            map.fitBounds(bounds, { padding: [30, 30], maxZoom: 12 }); 
        } else {
            map.setView([20, 0], 2);
        }
    }, [locations, map]);
    return null;
};

export default ProjectsMap;
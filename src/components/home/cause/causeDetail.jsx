import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Search, Loader2, CheckCircle, X } from "lucide-react";
import { api } from "../../../service/api"; 
import SectionLayout from "../../layouts/sectionLayouts";

export default function CampaignDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [campaign, setCampaign] = useState(null);
  const [urgentCauses, setUrgentCauses] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- STATE SEARCH ---
  const [searchTerm, setSearchTerm] = useState(""); 

  // --- STATE FORM DONASI ---
  const [amount, setAmount] = useState(10); 
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit_card");
  
  // State Data Donatur
  const [donorInfo, setDonorInfo] = useState({ firstName: "", lastName: "", email: "" });

  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // --- HANDLE SEARCH ---
  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      if (searchTerm.trim()) {
        navigate(`/Kampanye?q=${encodeURIComponent(searchTerm)}`); 
      }
    }
  };

  // --- FETCH DATA ---
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [campData, urgentData] = await Promise.all([
          api.getCampaignById(id), 
          api.getUrgentCampaigns()
        ]);
        
        setCampaign(campData);
        setUrgentCauses(urgentData);
      } catch (err) {
        console.error("Gagal load data:", err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [id]);

  // --- LOGIKA FORM ---
  const handleAmountClick = (val) => {
    setAmount(val);
    setCustomAmount(""); 
  };

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
    setAmount(Number(e.target.value)); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDonorInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleDonate = async (e) => {
    e.preventDefault();

    if (!amount || amount <= 0) return alert("Jumlah donasi tidak valid!");
    if (!donorInfo.firstName || !donorInfo.email) return alert("Mohon lengkapi Nama Depan dan Email!");

    try {
      setIsProcessing(true); 
      await new Promise((resolve) => setTimeout(resolve, 2000));

      await api.createDonation({
        campaign_id: campaign.id,
        first_name: donorInfo.firstName,
        last_name: donorInfo.lastName,
        email: donorInfo.email,
        amount: amount,
        status: 'paid', 
        payment_method: paymentMethod
      });

      setShowSuccessModal(true);
      setDonorInfo({ firstName: "", lastName: "", email: "" });
      setAmount(10);
      setCustomAmount("");

    } catch (err) {
      alert("Gagal memproses donasi: " + err.message);
    } finally {
      setIsProcessing(false); 
    }
  };

  const formatMoney = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  if (loading) return <div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin text-orange-500" size={48} /></div>;
  if (!campaign) return <div className="text-center py-20">Kampanye tidak ditemukan.</div>;

  const percentage = Math.min(((campaign.raised_amount || 0) / campaign.target_amount) * 100, 100);

  return (
    <SectionLayout>
      <div className="bg-white min-h-screen font-sans text-slate-800 relative mt-30 px-4 md:px-20">
      
      <div className="container mx-auto py-12">
        <div className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-orange-500">Beranda</Link> &gt; <span className="text-orange-500">Kampanye</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">{campaign.title}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* KOLOM KIRI (Detail & Form) */}
          <div className="lg:col-span-2 space-y-10">
            <div className="rounded-3xl overflow-hidden shadow-lg h-[400px] md:h-[500px] relative group">
              <img 
                src={campaign.image_url || "https://via.placeholder.com/800x500"} 
                alt={campaign.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
            </div>

            {/* Progress Bar Section */}
            <div className="bg-orange-50/50 p-6 rounded-xl border border-orange-100">
               <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden mb-4">
                  <div className="bg-orange-500 h-4 rounded-full transition-all duration-1000" style={{ width: `${percentage}%` }}></div>
               </div>
               <div className="flex justify-between items-end px-2">
                 <div>
                    <span className="block text-gray-500 text-sm font-semibold uppercase tracking-wider">Raised</span>
                    <span className="text-3xl font-bold text-orange-500">{formatMoney(campaign.raised_amount || 0)}</span>
                 </div>
                 <div className="text-right">
                    <span className="block text-gray-500 text-sm font-semibold uppercase tracking-wider">Goal</span>
                    <span className="text-xl font-bold text-slate-700">{formatMoney(campaign.target_amount)}</span>
                 </div>
               </div>
               <div className="text-right mt-2 px-2 text-sm text-gray-400 font-medium">
                  {campaign.donation_count || 0} donations
               </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p>{campaign.description}</p>
            </div>
            
            <hr className="border-gray-200" />

            {/* FORM DONASI */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Nominal</h3>
              <div className="flex flex-wrap gap-3 mb-6">
                {[10, 25, 50, 100, 500].map((val) => (
                  <button
                    key={val}
                    onClick={() => handleAmountClick(val)}
                    className={`px-6 py-3 rounded-full font-bold border transition ${
                      amount === val && customAmount === ""
                        ? "bg-slate-900 text-white border-slate-900"
                        : "bg-white text-slate-600 border-gray-300 hover:border-orange-500 hover:text-orange-500"
                    }`}
                  >
                    ${val}
                  </button>
                ))}
                <div className="flex-1 min-w-[150px] relative">
                   <span className="absolute left-4 top-3 text-slate-900 font-bold">$</span>
                   <input 
                      type="number" 
                      placeholder="CUSTOM"
                      value={customAmount}
                      onChange={handleCustomChange}
                      className="w-full pl-8 pr-4 py-3 rounded-full border border-gray-300 font-bold outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 uppercase placeholder:text-sm"
                   />
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-xl mb-8 flex items-center gap-3">
                 <span className="text-xl font-bold text-slate-400">$</span>
                 <span className="text-4xl font-bold text-slate-900">{amount || 0}</span>
              </div>

              <h3 className="text-2xl font-bold mb-6">Pilih Metode Pembayaran</h3>
              <div className="flex gap-6 mb-8">
                 <label className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'credit_card' ? 'border-orange-500' : 'border-gray-300'}`}>
                       {paymentMethod === 'credit_card' && <div className="w-2.5 h-2.5 bg-orange-500 rounded-full"></div>}
                    </div>
                    <input type="radio" name="payment" className="hidden" onClick={() => setPaymentMethod('credit_card')} />
                    <span className="font-bold text-slate-700 group-hover:text-orange-500 transition">Credit Card</span>
                 </label>
                 <label className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'paypal' ? 'border-orange-500' : 'border-gray-300'}`}>
                       {paymentMethod === 'paypal' && <div className="w-2.5 h-2.5 bg-orange-500 rounded-full"></div>}
                    </div>
                    <input type="radio" name="payment" className="hidden" onClick={() => setPaymentMethod('paypal')} />
                    <span className="font-bold text-slate-700 group-hover:text-orange-500 transition">PayPal</span>
                 </label>
              </div>

              <h3 className="text-2xl font-bold mb-6">Informasi Pribadi</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                 <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Nama Depan</label>
                    <input 
                        type="text" 
                        name="firstName" 
                        value={donorInfo.firstName} 
                        onChange={handleInputChange} 
                        placeholder="Nama Depan" 
                        className="w-full px-5 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition" 
                    />
                 </div>
                 <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Nama Belakang</label>
                    <input 
                        type="text" 
                        name="lastName" 
                        value={donorInfo.lastName}
                        onChange={handleInputChange}
                        placeholder="Nama Belakang" 
                        className="w-full px-5 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition" 
                    />
                 </div>
              </div>
              <div className="mb-8">
                 <label className="block text-sm font-bold text-slate-700 mb-2">Alamat Email</label>
                 <input 
                    type="email" 
                    name="email"
                    value={donorInfo.email}
                    onChange={handleInputChange}
                    placeholder="Alamat Email" 
                    className="w-full px-5 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition" 
                 />
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-gray-200">
                 <div className="text-2xl font-bold text-slate-800">
                    Donation Total: <span className="text-orange-500">${amount}</span>
                 </div>
                 <button 
                    onClick={handleDonate} 
                    disabled={isProcessing} 
                    className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-bold py-4 px-10 rounded-full transition shadow-lg hover:shadow-orange-200 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                 >
                    {isProcessing ? <><Loader2 className="animate-spin" /> Processing...</> : "DONATE Sekarang"}
                 </button>
              </div>

            </div>
          </div>

          {/* SIDEBAR (SEARCH & URGENT) */}
          <div className="space-y-10">
            {/* SEARCH BOX */}
            <div className="bg-white p-1">
                <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Cari kampanye..." 
                      value={searchTerm} 
                      onChange={(e) => setSearchTerm(e.target.value)} 
                      onKeyDown={handleSearch} 
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-full focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition" 
                    />
                    <Search 
                      className="absolute left-4 top-3.5 text-gray-400 cursor-pointer hover:text-orange-500" 
                      size={20} 
                      onClick={handleSearch} 
                    />
                </div>
            </div>

            {/* KAMPAIGNE TERBARU */}
            <div>
               <h4 className="text-xl font-bold mb-6 text-slate-900">Kampanye Terbaru</h4>
               <div className="space-y-6">
                  {urgentCauses.length > 0 ? urgentCauses.map((item) => (
                    <Link to={`/Kampanye/${item.id}`} key={item.id} className="flex gap-4 group">
                       <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-gray-200">
                          <img src={item.image_url} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                       </div>
                       <div>
                          <h5 className="font-bold text-slate-800 leading-tight mb-2 group-hover:text-orange-500 transition line-clamp-2">
                             {item.title}
                          </h5>
                          <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">
                            Lihat Detail
                          </span>
                       </div>
                    </Link>
                  )) : (
                    <p className="text-gray-400 text-sm">Tidak ada kampanye terbaru.</p>
                  )}
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL SUKSES */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in">
           <div className="bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl relative text-center animate-in zoom-in-95 duration-300">
              <button onClick={() => setShowSuccessModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
              
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                 <CheckCircle className="text-green-500 w-10 h-10" />
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Terima Kasih!</h2>
              <p className="text-gray-500 mb-6">Donasi Anda telah berhasil diproses.</p>
              
              <button onClick={() => setShowSuccessModal(false)} className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-slate-800 transition">
                 Selesai
              </button>
           </div>
        </div>
      )}

    </div>
    </SectionLayout>
  );
}
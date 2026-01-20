import React, { useState, useRef } from "react";
import SectionLayout from "../../layouts/sectionLayouts/index";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { faqs } from "../../../data/faq";
import EachUtils from "../../../utils/EachUtils";


import emailjs from '@emailjs/browser';

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  
  const form = useRef();
  
  // State untuk loading dan status pengiriman
  const [isSending, setIsSending] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true); 

    
    const SERVICE_ID = 'service_htlekjt';   
    const TEMPLATE_ID = 'template_9bztsbh'; 
    const PUBLIC_KEY = '1TeQ-E1k8nJZ_KwNI';     

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          alert("Pesan berhasil terkirim! Kami akan segera menghubungi Anda.");
          e.target.reset(); 
      }, (error) => {
          console.log(error.text);
          alert("Gagal mengirim pesan. Silakan coba lagi.");
      })
      .finally(() => {
        setIsSending(false); 
      });
  };

  return (
    <SectionLayout className="mt-30 bg-white p-2">
      {/* HEADER */}
      <div className="text-center mt-12 max-w-3xl mx-auto mb-24">
        <p className="text-gray-500 text-sm font-medium mb-4 uppercase tracking-wide">
          Beranda <span className="mx-2 text-black">/ Kontak</span>
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Selamat Datang di Halaman Kontak Kami!
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed">
          Kami siap mendengar dari Anda. Hubungi kami langsung melalui formulir di bawah ini.
        </p>
      </div>

      {/* CONTACT FORM */}
      <div className="max-w-6xl mx-auto hover:shadow-2xl hover:translate-y-2 transition duration-300 border-transparent hover:border-orange-500">
        <div className="grid grid-cols-1 lg:grid-cols-3 rounded-3xl overflow-hidden shadow-xl">
          {/* LEFT INFO */}
          <div className="bg-black text-white p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Kalau bukan kita,<br /> siapa lagi?
              </h2>
              <p className="text-gray-400 mb-10 leading-relaxed">
                Untuk informasi lebih lanjut dari kami silahkan dihubungi.
              </p>
              <div className="space-y-5 text-sm">
                <div className="flex gap-3">
                  <MapPin className="text-orange-500" />
                  <span>
                    8911 Bali, Denpasar<br />
                    Indonesia
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <Phone className="text-orange-500" />
                  <span>+62 815-2964-0581</span>
                </div>
                <div className="flex gap-3 items-center">
                  <Mail className="text-orange-500" />
                  <span>admin@ecoeducate.com</span>
                </div>
                <div className="flex gap-3 items-center">
                  <Clock className="text-orange-500" />
                  <span>Senin–Sabtu: 8:00am – 6:00pm</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-2 bg-gray-50 p-10">
            
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nama Pertama</label>
                  
                  <input type="text" name="firstName" placeholder="Nama Pertama" className="w-full p-3 rounded-lg bg-white border outline-none focus:ring-2 focus:ring-orange-500" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Nama Belakang</label>
                  <input type="text" name="lastName" placeholder="Nama Belakang" className="w-full p-3 rounded-lg bg-white border outline-none focus:ring-2 focus:ring-orange-500" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email Anda</label>
                  <input type="email" name="email" placeholder="Email Anda" className="w-full p-3 rounded-lg bg-white border outline-none focus:ring-2 focus:ring-orange-500" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Nomor HP</label>
                  <input type="text" name="phone" placeholder="Nomor HP" className="w-full p-3 rounded-lg bg-white border outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input type="text" name="subject" placeholder="Subject" className="w-full p-3 rounded-lg bg-white border outline-none focus:ring-2 focus:ring-orange-500" required />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Pesan</label>
                <textarea rows="5" name="message" placeholder="Pesan" className="w-full p-3 rounded-lg bg-white border outline-none focus:ring-2 focus:ring-orange-500" required />
              </div>

              <button
                type="submit"
                disabled={isSending} // Matikan tombol saat mengirim
                className={`px-10 py-4 rounded-full font-semibold transition text-white ${isSending ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'}`}
              >
                {isSending ? "MENGIRIM..." : "KIRIM PESAN"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* VISUAL & FAQ SECTION (Tetap sama) */}
      <div className="max-w-6xl mx-auto py-46 text-center">
       <img
        src="https://i.pinimg.com/736x/ac/f0/c2/acf0c2ef86ac6ae520b2de9a0613f328.jpg"
        className="rounded-xl w-[1000px] h-[350px] object-cover mx-auto"
        alt="Visual"
       />
      </div>

      <div className="max-w-6xl mx-auto mb-45 ">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-6">
          Pertanyaan yang Sering Diajukan
        </h2>
        <div className="space-y-4">
          <EachUtils of={faqs} render={(item,index) => (
            <div key={index} className="border rounded-xl p-5 hover:shadow-md transition duration-300">
              <button onClick={() => toggleFAQ(index)} className="w-full text-left flex justify-between items-center">
                <span className="text-lg font-semibold text-slate-800">{item.question}</span>
                <span className="text-orange-500 text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <p className="mt-4 text-gray-600 leading-relaxed">{item.answer}</p>
              )}
            </div>
          )}/>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Contact;
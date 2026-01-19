import React, { useState } from "react";
import SectionLayout from "../../layouts/sectionLayouts/index";
import { Phone, Mail, Clock, MapPin,} from "lucide-react";
import Footer from "../../home/Footer/index";
import { faqs } from "../../../data/faq";
import EachUtils from "../../../utils/EachUtils";


const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
          Kami siap mendengar dari Anda. Jika Anda memiliki bantuan,
          pertanyaan, atau ingin bekerja sama dengan kami, jangan ragu untuk
          menghubungi melalui formulir di bawah ini.
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
                  <span>+61 815-2964-0581</span>
                </div>
                <div className="flex gap-3 items-center">
                  <Mail className="text-orange-500" />
                  <span>kadeegiditamahaputra@email.net</span>
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
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nama Pertama
                  </label>
                  <input
                    type="text"
                    placeholder="Nama Pertama"
                    className="w-full p-3 rounded-lg bg-white border outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nama Belakang
                  </label>
                  <input
                    type="text"
                    placeholder="Nama Belakang"
                    className="w-full p-3 rounded-lg bg-white border outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Anda
                  </label>
                  <input
                    type="email"
                    placeholder="Email Anda"
                    className="w-full p-3 rounded-lg bg-white border outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nomor
                  </label>
                  <input
                    type="text"
                    placeholder="Nomor"
                    className="w-full p-3 rounded-lg bg-white border outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 rounded-lg bg-white border outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Pesan
                </label>
                <textarea
                  rows="5"
                  placeholder="Pesan"
                  className="w-full p-3 rounded-lg bg-white border outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <button
                type="submit"
                className="bg-orange-500 text-white px-10 py-4 rounded-full font-semibold hover:bg-orange-600 transition"
              >
                KIRIM
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* VISUAL SECTION */}
      <div className="max-w-6xl mx-auto py-46 text-center">
        <img
          src="/fotosusah.jpg"
          className="rounded-xl w-[1000px] h-[350px] object-cover mx-auto"
        />
      </div>

      {/* FAQ SECTION */}
      <div className="max-w-6xl mx-auto mb-45 ">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-6">
          Pertanyaan yang Sering Diajukan
        </h2>
        <p className="text-gray-500 text-center text-lg mb-10">
          Temukan jawaban atas pertanyaan umum seputar donasi dan organisasi amal.
        </p>
        <div className="space-y-4">
          <EachUtils of={faqs} render={(item,index) => (
            <div
              key={index}
              className="border rounded-xl p-5 hover:shadow-md transition duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center"
              >
                <span className="text-lg font-semibold text-slate-800">
                  {item.question}
                </span>
                <span className="text-orange-500 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
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

import React from "react";
import { Routes, Route } from "react-router-dom";
import DefaultLayouts from "./components/layouts/defaultLayouts";
import Cause from "./components/home/cause";
import Contact from "./components/home/contact";
import Beranda from "./components/layouts/Beranda";
import CampaignDetail from "./components/home/cause/causeDetail";
import AboutUs from "./components/home/About/about-us";

const App = () => {
  return (
    <DefaultLayouts>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/Kampanye" element={<Cause />} />
        <Route path="/kampanye" element={<Cause />} />
        <Route path="/kontak" element={<Contact />} />
        <Route path="/tentang-kami" element={<AboutUs />} />
        <Route path="/kampanye/:id" element={<CampaignDetail />} />
      </Routes>
    </DefaultLayouts>
  );
};

export default App;

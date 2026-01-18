import React from "react";
import { Routes, Route } from "react-router-dom";
import DefaultLayouts from "./components/layouts/defaultLayouts";
import Jumbotron from "./components/home/jumbotron";
import Cause from "./components/home/cause";
import Contact from "./components/home/contact";
import About from "./components/home/about";

const App = () => {
  return (
    <DefaultLayouts>
      <Routes>
        <Route path="/" element={<Jumbotron />} />
        <Route
          path="/donate"
          element={<div className="pt-24 text-center">Halaman Donasi</div>}
        />
        <Route path="/kampanye" element={<Cause />} />
        <Route path="/tentang-kami" element={<About />} />
        <Route path="/kontak" element={<Contact />} />
      </Routes>
    </DefaultLayouts>
  );
};

export default App;

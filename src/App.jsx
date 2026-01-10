// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom' // HAPUS 'Router' atau 'BrowserRouter'
import DefaultLayouts from './components/layouts/defaultLayouts'
import Jumbotron from './components/home/jumbotron'

const App = () => {
  return (
    <DefaultLayouts>
      <Routes>
          <Route path="/" element={<Jumbotron />} />
          <Route path="/donate" element={<div className="pt-24 text-center">Halaman Donasi</div>} />
      </Routes>
    </DefaultLayouts>
  )
}

export default App
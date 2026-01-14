import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DefaultLayouts from './components/layouts/defaultLayouts'
import Jumbotron from './components/home/jumbotron'
import Cause from './components/home/cause'

const App = () => {
  return (
    <DefaultLayouts>
      <Routes>
        <Route path="/" element={<Jumbotron />} />
        <Route path="/donate" element={<div className="pt-24 text-center">Halaman Donasi</div>} />
        <Route path="/kampanye" element={<Cause />} />
      </Routes>
    </DefaultLayouts>
  )
}

export default App
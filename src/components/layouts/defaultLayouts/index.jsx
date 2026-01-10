// src/components/layouts/defaultLayouts.jsx
import React from 'react'
// Jangan import Navbar di sini

const DefaultLayouts = ({ children }) => {
  return (
    <div  >
      <main>
        {children} {/* Cuma render isi halaman (Jumbotron/Donate/dll) */}
      </main>
    </div>
  )
}

export default DefaultLayouts
// src/components/layouts/defaultLayouts.jsx
import React from 'react'
import Navbar from '../../home/navbar'
import Footer from '../../home/Footer'

const DefaultLayouts = ({ children }) => {
  return (
    <div  >
      <Navbar/>
      <main>
        {children} 
      </main>
      <Footer/>
    </div>
  )
}

export default DefaultLayouts
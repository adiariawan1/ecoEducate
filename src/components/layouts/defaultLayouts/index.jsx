
import React from 'react'
import Navbar from '../../home/navbar'

const DefaultLayouts = ({ children }) => {
  return (
    <div  >
      <Navbar/>
      <main>
        {children} 
      </main>
    </div>
  )
}

export default DefaultLayouts
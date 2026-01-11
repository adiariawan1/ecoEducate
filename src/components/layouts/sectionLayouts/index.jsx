import React from 'react'


const SectionLayout = ({ children, className="" }) => {
  return (
    <div className={`container mx-auto px-6 ${className}`}>{children}</div>
  )
}

export default SectionLayout
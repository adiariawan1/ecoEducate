import React from 'react'
import SectionLayout from '../../layouts/sectionLayouts'
import HeaderCauses from './header'
import LatestCauses from './latestCauese'
import NewsSection from '../newsSection'






const Cause = () => {
  return (
    <SectionLayout className='pt-12 pb-24 bg-white mt-30'>
        <HeaderCauses/>
        <LatestCauses/>
        <NewsSection/>
    </SectionLayout>
  )
}

export default Cause
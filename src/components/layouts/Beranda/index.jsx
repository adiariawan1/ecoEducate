import React from 'react'
import SectionLayout from '../sectionLayouts'
import Jumbotron from '../../home/jumbotron'
import ProjectsMap from '../../home/projectRegion'
import LatestCauses from '../../home/cause/latestCauese'
import LatestCausehome from '../../home/cause/latestCausehome'
import OurGalery from '../../home/Galery'
import NewsSection from '../../home/newsSection'
import PartnersSection from '../../home/PartnerIcon'
import About from '../../home/About'

const Beranda = () => {
  return (
    <SectionLayout className='mt-30'>
        <Jumbotron/>
        <About/>
        <LatestCausehome />
        <ProjectsMap/>
        <OurGalery/>
        <NewsSection/>
        <PartnersSection/>
    </SectionLayout>
  )
}

export default Beranda
import React from 'react'
import SectionLayout from '../sectionLayouts'
import Jumbotron from '../../home/jumbotron'
import ProjectsMap from '../../home/projectRegion'
import LatestCauses from '../../home/cause/latestCauese'
import LatestCausehome from '../../home/cause/latestCausehome'
import OurGalery from '../../home/Galery'

const Beranda = () => {
  return (
    <SectionLayout className='mt-30'>
        <Jumbotron/>
        <LatestCausehome />
        <ProjectsMap/>
        <OurGalery/>
    </SectionLayout>
  )
}

export default Beranda
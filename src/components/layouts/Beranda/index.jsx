import React from "react";
import SectionLayout from "../sectionLayouts";
import Jumbotron from "../../home/jumbotron";
import ProjectsMap from "../../home/projectRegion";
import LatestCausehome from "../../home/cause/latestCausehome";
import OurGalery from "../../home/Galery";
import NewsSection from "../../home/newsSection";
import PartnersSection from "../../home/PartnerIcon";
import AboutHome from "../../home/About";

const Beranda = () => {
  return (
    <SectionLayout className="mt-30">
      <Jumbotron />
      <AboutHome />
      <LatestCausehome />
      <ProjectsMap />
      <OurGalery />
      <NewsSection />
      <PartnersSection />
    </SectionLayout>
  );
};

export default Beranda;

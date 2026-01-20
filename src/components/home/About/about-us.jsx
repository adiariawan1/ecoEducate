import AUct from "react";
import SectionLayout from "../../layouts/sectionLayouts";
import Header from "../aboutComponent/header";
import BodyAbout from "../aboutComponent/body";
import InfoOrganization from "../aboutComponent/infoOrganization";
import ProjectsMap from "../projectRegion";
import NewsSection from "../newsSection";
import PartnersSection from "../PartnerIcon";

const AboutUs = () => {
  return (
    <SectionLayout className="pt-12 pb-24 bg-white mt-30">
      <Header />
      <BodyAbout />
      <InfoOrganization />
      <ProjectsMap />
      <NewsSection />
      <PartnersSection />
    </SectionLayout>
  );
};

export default AboutUs;

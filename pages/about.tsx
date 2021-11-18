import React, { useContext, useEffect } from "react";
import AboutContent from "../layouts/Content/AboutContent";
import ServicesSection from "../layouts/Content/ServicesSection";
import Section from "../layouts/Section";
import { AppContext } from "../contexts/appContext";

const About = () => {
  const { aboutData, getAboutInfo }: any = useContext(AppContext);
  useEffect(() => {
    getAboutInfo();
  }, []);
  return (
    <main>
      <Section
        sectionHeading="About"
        sectionContent={<AboutContent data={aboutData} />}
      />
      <Section
        className="about-services"
        sectionHeading="Services"
        sectionContent={ServicesSection}
      />
    </main>
  );
};

export default About;

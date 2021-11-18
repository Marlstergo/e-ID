import React, { useContext, useEffect } from "react";
import GetAppSection from "../layouts/Content/GetAppSection";
import HeroSection from "../layouts/Content/HeroSection";
import NewsSection from "../layouts/Content/NewsSection";
import Section from "../layouts/Section";
import ServicesSection from "../layouts/Content/ServicesSection";
import { AppContext } from "../contexts/appContext";
interface Props {}

const Home = (props: Props) => {
  const { homeData, newsList, getHomeInfo }: any = useContext(AppContext);

  useEffect(() => {
    getHomeInfo();
  }, []);

  return (
    <main className="home">
      <HeroSection data={homeData} />
      <Section
        className="o-section--floating-bg"
        sectionHeading="Our Services"
        sectionContent={ServicesSection}
      />
      <GetAppSection />
      <Section
        className="o-section-col"
        sectionHeading="News Section"
        sectionContent={<NewsSection data={newsList} />}
      />
    </main>
  );
};

export default Home;

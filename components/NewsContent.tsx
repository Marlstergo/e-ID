import React from "react";

import { SectionLabel } from "../components/SectionLabel";
import { NewsCard } from "../components/NewsCard";

interface Props {}

const NewsContent = (props: Props) => {
  return (
    <>
      <SectionLabel>News</SectionLabel>
      <div className="Cards">
        <NewsCard
          imgSource="/NewsImage1.png"
          CardTitle="IPO staff answer SOS from Newport Sea Cadets"
          CardSubtitle="22 September 2021"
        />
        <NewsCard
          imgSource="/NewsImage2.png"
          CardTitle="Gas prices and energy suppliers"
          CardSubtitle="22 September 2021"
        />
        <NewsCard
          CardTitle="Letters between the Paymaster General, The Rt Hon Michael ..."
          CardSubtitle="22 September 2021"
        />
      </div>
    </>
  );
};

export default NewsContent;

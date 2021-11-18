import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import Image from "next/image";

import NewsTopics from "../../components/NewsTopics";
import { SectionLabel } from "../../components/SectionLabel";
import Article from "../../components/Article";
import NewsSection from "../../layouts/Content/NewsSection";
import Section from "../../layouts/Section";
import { AppContext } from "../../contexts/appContext";

function NewsArticle() {
  const [selectedNews, setSelectedNews] = useState<any>({});
  const [refresh, setRefresh] = useState<number>();

  useEffect(() => {
    const newss: any = JSON.parse(localStorage.getItem("news"));
    setSelectedNews(newss);
  }, [refresh]);

  const { newsList }: any = useContext(AppContext);
  return (
    selectedNews && (
      <main>
        <div className="news-wrapper">
          <div className="news-sidebar">
            <SectionLabel>
              {selectedNews?.title}:{" "}
              {moment(new Date(selectedNews?.created)).format("MMM DD YYYY")}
            </SectionLabel>
            <NewsTopics data={selectedNews?.tags} />
          </div>
          <div className="news-container">
            <div className="article-info">
              <div className="article-image float-right">
                {selectedNews.mediaLink && (
                  <Image
                    src={selectedNews?.mediaLink}
                    height="200"
                    width="250"
                    layout="intrinsic"
                    alt="article-1-img"
                  />
                )}
              </div>
              <div className="published-date">
                Published{" "}
                {moment(new Date(selectedNews?.created)).format("MMM DD YYYY")}
              </div>
              <div className="release">Press release</div>
              <div className="article-title py-3 pr-3">
                <h1 className="text-3xl font-semibold ">
                  {selectedNews?.title}
                </h1>
              </div>
              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: selectedNews?.description }}
              ></div>
            </div>
          </div>
        </div>
        <Section
          className="o-section-col"
          sectionHeading="Latest News"
          sectionContent={
            <NewsSection setRefresh={setRefresh} data={newsList} />
          }
        />
      </main>
    )
  );
}

export default NewsArticle;

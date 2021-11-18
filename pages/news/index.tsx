import React, { useContext, useEffect } from "react";
import { NewsCard } from "../../components/NewsCard";
import Masonry from "react-masonry-css";
import NewsTopics from "../../components/NewsTopics";
import { SectionLabel } from "../../components/SectionLabel";
import Section from "../../layouts/Section";
import moment from "moment";
import { AppContext } from "../../contexts/appContext";

function News() {
  const { categoryList, newsList, getCategoryList, getNewsList }: any =
    useContext(AppContext);

  useEffect(() => {
    getNewsList();
    getCategoryList();
  }, []);

  const breakpointColumnsObj = {
    default: 3,
    1366: 3,
    1000: 2,
    550: 1,
  };
  return (
    <main>
      <div className="news-wrapper">
        <div className="news-sidebar ">
          <SectionLabel>Latest News</SectionLabel>
          <NewsTopics data={categoryList} />
        </div>

        <div className="news-container">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {newsList.map((e: any, index: number) => {
              return (
                <NewsCard
                  key={`news-card--${index}`}
                  data={e}
                  imgSource={e.mediaLink}
                  CardTitle={e.title}
                  CardSubtitle={moment(new Date(e.created)).format(
                    "MMM DD YYYY"
                  )}
                />
              );
            })}
          </Masonry>
        </div>
      </div>
    </main>
  );
}

export default News;

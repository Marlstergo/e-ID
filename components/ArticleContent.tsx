import React from "react";
import ArticleText from "./Articletext";
import Image from "next/image";
class ArticleContent extends React.Component {
  render() {
    return (
      <div className="article-info">
        <div className="article-image">
          <Image
            src="article-image.png"
            height="200"
            width="250"
            alt="article-1-img"
          />
        </div>
        <div className="published-date">Published 23 September 2021</div>
        <div className="release">Press release</div>
        <div className="article-title">
          <h1>
            Prime Minister Boris Johnson met UN Secretary General Antonio
            Guterres at the UN General Assembly.
          </h1>
        </div>

        <div className="article-content">
          <ArticleText />
        </div>
      </div>
    );
  }
}

export default ArticleContent;

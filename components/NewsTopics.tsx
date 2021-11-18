import React from "react";
function NewsTopics({ data }: any) {
  return (
    <div className="topics-wrapper">
      <div className="topic-heading">
        <h4>Topics</h4>
      </div>
      <div className="topics">
        {data?.map((t: any, index: number) => (
          <span key={index}>#{t.name}</span>
        ))}
      </div>
    </div>
  );
}

export default NewsTopics;

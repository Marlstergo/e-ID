import Masonry from "react-masonry-css";
import { SectionLabel } from "../../components/SectionLabel";
import { NewsCard } from "../../components/NewsCard";

import moment from "moment";
export default function NewsSection({ data, setRefresh }: any) {
  return (
    <div className="row news-section">
      <Masonry
        breakpointCols={{
          default: 4,
          1366: 4,
          1000: 2,
          550: 1,
        }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.map((e: any, index: number) => {
          return (
            <NewsCard
              key={`news-card-${index}`}
              data={e}
              setRefresh={setRefresh}
              imgSource={e.mediaLink}
              CardTitle={e.title}
              CardSubtitle={moment(new Date(e.created)).format("MMM DD YYYY")}
            />
          );
        })}
      </Masonry>
    </div>
  );
}

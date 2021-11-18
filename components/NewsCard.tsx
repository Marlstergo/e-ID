import React, { useContext } from "react";
import { Typography } from "@mui/material";
// import { useHistory } from "react-router-dom";
import { AppContext } from "../contexts/appContext";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";

interface Props {
  imgSource?: string;
  CardSubtitle?: string;
  CardTitle: string;
  data?: any;
  setRefresh?: any;
}

export function NewsCard(props: Props) {
  let history = useRouter();
  const { setSelectedNews }: any = useContext(AppContext);
  const onHandleClick = () => {
    localStorage.setItem("news", JSON.stringify(props?.data));
    setSelectedNews(props?.data);
    if (props.setRefresh) {
      props.setRefresh(Math.random());
    }
    history.push("/news/news-article");
  };

  return (
    <div className="card card--news" onClick={onHandleClick}>
      {props.imgSource ? (
        <Image
          height="200"
          width="250"
          src={props.imgSource}
          alt="card-icon"
          layout="responsive"
        />
      ) : null}
      <div className="content">
        {/* <Link to={`/news/news-article}`}> */}
        <Typography variant="h6">{props.CardTitle}</Typography>
        {/* </Link> */}
        <Typography variant="caption">{props.CardSubtitle}</Typography>
      </div>
    </div>
  );
}

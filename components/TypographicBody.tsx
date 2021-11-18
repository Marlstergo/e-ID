import React from "react";
import { Typography } from "@mui/material";
interface Props {
  title: string;
  children: React.ReactElement | React.ReactElement[] | string;
  style?: React.CSSProperties;
}

const TypographicBody = (props: Props) => {
  return (
    <div className="box" style={props.style}>
      <Typography color="primary" variant="h4">
        {props.title}
      </Typography>
      <Typography variant="body1">{props.children}</Typography>
    </div>
  );
};

export default TypographicBody;

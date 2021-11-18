import { Typography } from "@mui/material";
import React from "react";

interface Props {
  achievment: string;
  subtitle: string;
}

const Achievment = (props: Props) => {
  return (
    <div>
      <Typography color="primary" variant="h1">
        {props.achievment}
      </Typography>
      <Typography variant="body1">{props.subtitle}</Typography>
    </div>
  );
};

export default Achievment;

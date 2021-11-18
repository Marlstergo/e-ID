import { Paper } from "@mui/material";
import React from "react";

interface Props {
  children?: React.ReactElement[] | React.ReactElement | string;
}

export const ServiceCard = (props: Props) => {
  return <div className="card card--service">{props.children}</div>;
};

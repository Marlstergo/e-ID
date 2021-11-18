import React from "react";
import { Typography } from "@mui/material";
import Achievment from "../../components/Achievment";
const Achievments = [
  {
    Achievment: "3953 +",
    Subtitle: "Stet erat dolore et takimata dolor justo, rebum aliquyam elitr.",
  },
  {
    Achievment: "23 +",
    Subtitle: "Stet erat dolore et takimata dolor justo, rebum aliquyam elitr.",
  },
  {
    Achievment: "12367 +",
    Subtitle: "Stet erat dolore et takimata dolor justo, rebum aliquyam elitr.",
  },
].map((value, index) => (
  <Achievment
    achievment={value.Achievment}
    key={index}
    subtitle={value.Subtitle}
  />
));
const Achiev = ({ data }: any) => {
  return (
    <>
      <div className="container container-bg">{Achievments}</div>
      <Typography variant="body1">{data?.description}</Typography>
    </>
  );
};
export default Achiev;

import { Typography } from "@mui/material";
import React from "react";
import { SectionLabel } from "../components/SectionLabel";

interface Props {
  sectionContent: React.ReactElement | React.ReactElement[] | string;
  sectionHeading: React.ReactElement | React.ReactElement[] | string;
  className?: string;
}

const Section = (props: Props) => {
  return (
    <section className={"o-section" + " " + props.className}>
      <SectionLabel className="o-section__item">
        {props.sectionHeading}
      </SectionLabel>
      <div className="o-section__item">{props.sectionContent}</div>
    </section>
  );
};

export default Section;

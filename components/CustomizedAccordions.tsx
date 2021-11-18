import * as React from "react";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ArrowForward } from "@mui/icons-material";

interface Props {
  title: string;
  children: React.ReactElement | React.ReactElement[] | string;
}
export default function CustomizedAccordion(props: Props) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <MuiAccordion
      className="accordian"
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
    >
      <MuiAccordionSummary
        expandIcon={<ArrowForward />}
        aria-controls="panel1d-content"
        id="panel1d-header"
      >
        <Typography variant="h6">{props.title}</Typography>
      </MuiAccordionSummary>
      <MuiAccordionDetails>{props.children}</MuiAccordionDetails>
    </MuiAccordion>
  );
}

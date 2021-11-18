import { Typography, TypographyProps } from "@mui/material";
import React from "react";
import theme from "../helpers/store/theme";

export const SectionLabel = (props: TypographyProps) => {
  return (
    <Typography
      variant="h4"
      sx={{
        padding: "16px 0",
        borderTop: "4px solid " + theme.palette.secondary.main,
        borderBottom: "4px solid " + theme.palette.secondary.main,
      }}
      {...props}
    >
      {props.children}
    </Typography>
  );
};

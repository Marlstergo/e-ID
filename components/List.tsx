import { Grid, Typography, TypographyVariant } from "@mui/material";
import React from "react";

interface Props {
  HeaderTypography: TypographyVariant;
  Header: string;
  ItemTypography: TypographyVariant;
  items: string[];
}

const List = (props: Props) => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant={props.HeaderTypography}>{props.Header}</Typography>
      </Grid>
      {props.items.map((list, index) => (
        <Grid item key={index}>
          <Typography variant={props.ItemTypography}>{list}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};
export default List;

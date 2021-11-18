import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
// import logo from "../assets/logoRed.svg";
import List from "../components/List";
import Image from "next/image";

interface Props {}

export const Footer = (props: Props) => {
  const Lists = [
    {
      header: "Coronavirus (COVID-19)",
      List: ["Coronavirus (COVID-19): guidance and support"],
    },
    {
      header: "Services and information",
      List: [
        "Benefits",
        "Births, deaths, marriages",
        "Childcare and parenting",
        "Citizenship and living in the UK",
        "Crime, justice and the law",
        "Disabled people",
        "Driving and transport",
      ],
    },
    {
      header: "Support",
      List: [
        "Help Center",
        "Webinars",
        "Tutorials",
        "Status",
        "iOS App",
        "Android App",
      ],
    },
    {
      header: "Services and information",
      List: [
        "Benefits",
        "Births, deaths, marriages",
        "Childcare and parenting",
        "Citizenship and living in the UK",
        "Crime, justice and the law",
        "Disabled people",
        "Driving and transport",
      ],
    },
  ];

  return (
    <footer>
      <Grid container justifyContent="space-evenly">
        <Grid
          lg={2}
          md={12}
          classes={{ root: "footerCol" }}
          container
          item
          direction="column"
        >
          <Grid item>
            <Image height="60" width="140" alt="logo" src="/logoRed.svg" />
          </Grid>
        </Grid>
        {Lists.map((list, index) => (
          <Grid
            lg={2}
            md={3}
            xs={6}
            item
            key={index}
            classes={{ root: "footerCol lists" }}
          >
            <List
              ItemTypography="subtitle1"
              HeaderTypography="subtitle2"
              Header={list.header}
              items={list.List}
            />
          </Grid>
        ))}
      </Grid>
      <Divider></Divider>
      <Grid
        classes={{ root: "copyright" }}
        container
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            All content is available under the Open Government Licence v3.0,
            except where otherwise stated
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

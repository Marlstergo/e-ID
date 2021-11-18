import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";

interface Props {}

export const GetAppSection = (props: Props) => {
  return (
    <section className="AppSection section--full">
      <div className="content">
        <Typography color="white" variant="h2">
          Get our
          <Typography component="span" color="primary" variant="h2">
            
            App{" "}
          </Typography>
          Right Now
        </Typography>
        <Typography color="white" variant="body1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>
        <Stack spacing={2} direction="row">
          <Image height="60" width="160" src="/App_Store.png" alt="App Store" />
          <Image
            height="60"
            width="160"
            src="/Google_Play.png"
            alt="Google Play"
          />
        </Stack>
      </div>
    </section>
  );
};

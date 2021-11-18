import { ArrowForward } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

interface Props {
  data: any;
}

export const HeroSection = (props: Props) => {
  const { data } = props;
  return (
    <section className="hero overlay">
      <div className="content">
        <Typography color="primary" variant="h3">
          {data?.title}
        </Typography>
        <Typography variant="h6" color="secondary">
          {data?.subTitle}
        </Typography>
        <Typography color="secondary" variant="body1">
          {data?.description}
        </Typography>
        <Link href="/about">
          <a>
            <Button
              sx={{ borderRadius: 0, maxWidth: "200px" }}
              fullWidth
              size="large"
              variant="contained"
            >
              About
              <ArrowForward />
            </Button>
          </a>
        </Link>
      </div>
    </section>
  );
};

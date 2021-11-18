import { ArrowForward, CreditCardOffOutlined } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { ServiceCard } from "../../components/ServiceCard";
import Link from "next/link";

export default (
  <div className="row">
    {[
      {
        icon: <CreditCardOffOutlined color="secondary" />,
        label: "Sign in to your Universal Credit account",
      },
      {
        icon: <LocationOnOutlinedIcon color="secondary" />,
        label: "Fill in your passenger locator form",
      },
      {
        icon: <LibraryBooksOutlinedIcon color="secondary" />,
        label: "Check the MOT history of a vehicle",
      },
      {
        icon: <LocationOnOutlinedIcon color="secondary" />,
        label: "Fill in your passenger locator form",
      },
      {
        icon: <LibraryBooksOutlinedIcon color="secondary" />,
        label: "Check the MOT history of a vehicle",
      },
    ].map((value, index) => (
      <Link href="/services/service-articles" key={index}>
        <a>
          <ServiceCard>
            {value.icon}
            <Typography color="white" variant="body1">
              {value.label}
            </Typography>
          </ServiceCard>
        </a>
      </Link>
    ))}
  </div>
);

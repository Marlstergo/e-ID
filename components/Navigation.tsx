import React from "react";
import { default as NavLink } from "next/link";
import Image from "next/image";

import {
  Button,
  Icon,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  Divider,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { MenuBook, MenuOpen } from "@mui/icons-material";
import {
  Panel,
  PanelSessionProvider,
  withPanelHandler,
} from "../helpers/store/smartWrappers/Panel";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import theme from "../helpers/store/theme";
// import logo from "../assets/logo.svg";
import { Box } from "@mui/system";
import SearchBar from "./SearchBar";
import { useRouter } from "next/dist/client/router";
interface Props {}

const Navlinks = [
  {
    name: "Home",
    url: "",
  },
  {
    name: "About",
    url: "about",
  },
  {
    name: "Services",
    url: "services",
  },
  {
    name: "News & Publication",
    url: "news",
  },
  {
    name: "KYC",
    url: "kyc",
  },
  {
    name: "Contact Us",
    url: "contact",
  },
];
const OpenPanel = withPanelHandler(({ panelHandler }) => (
  <IconButton
    className="MenuIcon desktop-hide"
    onClick={() => panelHandler(true)}
  >
    <MenuIcon />
  </IconButton>
));

const NavLinksWithPanelControls = withPanelHandler(({ panelHandler }) => (
  <List>
    {Navlinks.map((text) => (
      <NavLink key={text.name} href={"/" + text.url}>
        <div>
          <a
          //   activeClassName="active"
          >
            <div onClick={() => panelHandler(false)}>
              <ListItem button key={text.name}>
                <ListItemText primary={text.name} />
              </ListItem>
            </div>
          </a>
        </div>
      </NavLink>
    ))}
  </List>
));

const list = () => (
  <Box className="mobile-nav" sx={{ width: "auto" }} role="presentation">
    <NavLinksWithPanelControls />
  </Box>
);

export const Navigation = (props: Props) => {
  const router = useRouter();
  return (
    <PanelSessionProvider>
      <Panel>{list()}</Panel>

      <div className="header">
        <OpenPanel />
        <NavLink href="/">
          <a>
            <Image
              height="60"
              width="140"
              src="/logo.svg"
              layout="intrinsic"
              alt="logo"
            />
          </a>
        </NavLink>
        <Stack className="mobile-hide" spacing={6} direction={"row"}>
          {Navlinks.map((value) => (
            <Link
              key={value.name}
              color="GrayText"
              underline="none"
              component="button"
              variant="body1"
              className={router.pathname === "/" + value.url ? "active" : ""}
            >
              {/* <a> */}
              <NavLink href={"/" + value.url}>
                <a
                  className={
                    router.pathname === "/" + value.url ? "active" : ""
                  }
                  // className="active"
                >
                  {" "}
                  {value.name}{" "}
                </a>
              </NavLink>
              {/* </a> */}
            </Link>
          ))}
        </Stack>
        <SearchBar />
      </div>
    </PanelSessionProvider>
  );
};

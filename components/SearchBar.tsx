import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import theme from "../helpers/store/theme";

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className={open ? "SearchContainer open" : "SearchContainer hide"}>
      <IconButton
        onClick={() => {
          setOpen(true);
        }}
        size="medium"
        sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 0 }}
      >
        <SearchIcon
          sx={{
            color: "white",
            ":hover": { color: theme.palette.primary.main },
          }}
        />
      </IconButton>
      <div className="SearchBar">
        <SearchIcon sx={{ color: theme.palette.primary.main }} />
        <InputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
        <CloseIcon
          onClick={() => {
            setOpen(false);
          }}
          sx={{ color: theme.palette.primary.main }}
        />
      </div>
    </div>
  );
}

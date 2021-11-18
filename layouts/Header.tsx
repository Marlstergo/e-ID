import React from "react";
import { Navigation } from "../components/Navigation";
import SearchBar from "../components/SearchBar";

interface Props {}

const Header = (props: Props) => {
  return (
    <header>
      <Navigation />
    </header>
  );
};

export default Header;

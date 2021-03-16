import React from "react";
import LogoModule from "./Logo";
import "../SASS/Header.sass";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import Footer from "./Footer";

const Header = (props) => {
  return (
    <header id="ps-header" className="bg-blue">
      <div className="container">
        <nav className="d-flex align-items-center">
          <LogoModule />
          <LeftNav />
          <RightNav />
        </nav>
      </div>
    </header>
  );
};

export default Header;

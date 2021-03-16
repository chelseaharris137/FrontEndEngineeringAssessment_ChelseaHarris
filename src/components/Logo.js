import React from "react";
import LogoImg from "../images/Favicon.svg";

const LogoModule = (props) => {
  return (
    <div className="ps-logo d-flex align-items-center">
      <div className="thumb">
        <a href="#">
          <img src={LogoImg} alt="Nayya" />
        </a>
        <span className="count dbl-digit">3</span>
      </div>
      <div className="logo-title">
        <a href="#">
          My Benefits
          <br />
          Concierge
        </a>
      </div>
    </div>
  );
};

export default LogoModule;

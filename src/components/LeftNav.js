import React from "react";

const LeftNav = (props) => {
  return (
    <ul className="ps-navbar mr-auto d-flex">
      <li>
        <a href="#" className="navlinks">
          Pharmacy
          <br />
          Savings
        </a>
      </li>
      <li>
        <a href="#" className="navlinks">
          Claim
          <br />
          Opportunities
        </a>
      </li>
      <li>
        <a href="#" className="navlinks">
          Find Care
          <br />
          In-Network
        </a>
      </li>
    </ul>
  );
};

export default LeftNav;

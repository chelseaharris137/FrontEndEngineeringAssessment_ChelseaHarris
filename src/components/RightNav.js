import React from "react";
import NotificationIcon from "../images/notification.svg";

const RightNav = (props) => {
  return (
    <ul className="ps-navbar ml-auto d-flex align-items-center">
      <li>
        <a
          href="#"
          data-toggle="tooltip"
          data-placement="bottom"
          title="View my Cards and Plans"
        >
          <img src={NotificationIcon} alt="" />
        </a>
      </li>
      <li>
        <a href="#" className="user-name">
          <span>j</span>
          <span className="mob-hidden">Caravel Autism Health</span>
        </a>
      </li>
    </ul>
  );
};

export default RightNav;

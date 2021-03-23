import React from "react";
import DollarIcon from "../images/dollar.png";

const Card = (props) => {
  const createMarkup = () => {
    return { __html: props.description };
  };
  return (
    <div className={props.outterDivClass}>
      <div className="savings-slide">
        <div className="inner">
          <div className="left">
            <div className="thumb">
              <img src={props.image} alt="" />
            </div>
            <div className="left-txt">
              <p>
                {props.tinytext}
                <span>{props.amount}</span>
              </p>
              <div className="author">{props.firstname}</div>
            </div>
          </div>
          <div className="mid">
            <div className="author">{props.firstname}</div>
            <p dangerouslySetInnerHTML={createMarkup()}></p>
          </div>
          <div className="right">
            <div className="time">{props.time}</div>
            <a href="#" className="btn ps-btn btn-sm btn-blue-border">
              Save now <img src={DollarIcon} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

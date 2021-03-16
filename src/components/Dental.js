import React from "react";
import "../SASS/Medical.sass";
import StatusBarTwo from "../images/statusbartwo.png";

const Dental = (props) => {
  return (
    <div className="container">
      <div className="row" id="top-row">
        <div className="col" id="smallFont">
          Annual Benefit Limit
        </div>
        <div className="col" id="smallFont">
          Deductible
        </div>
      </div>
      <div className="row">
        <div className="col" id="smallFont2">
          $2500
        </div>
        <div className="col" id="smallFont2">
          $40 per person
        </div>
      </div>
      <div className="row" id="btm-row">
        <div className="col" id="smallFont">
          Total spent of $2500
        </div>
        <div className="col" id="smallFont4">
          Remaining
        </div>
      </div>
      <div className="row">
        <div className="col" id="bigFont">
          $40.57
        </div>
        <div className="col" id="bigFont2">
          $2459.43
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img src={StatusBarTwo} width="300" />
          <p className="deductiblegraph">
            You <b>have not</b> reached the max benefit.
            <br />
            <br />
            <hr className="grayline" />
            <span className="color-dark-blue">View my cards and plans</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dental;

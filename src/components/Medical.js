import React from "react";
import "../SASS/Medical.sass";
import StatusBarOne from "../images/statusbarone.png";

const Medical = (props) => {
  return (
    <div className="container">
      <div className="row" id="top-row">
        <div className="col" id="smallFont">
          Total deductable
        </div>
        <div className="col" id="smallFont">
          Deadline
        </div>
      </div>
      <div className="row">
        <div className="col" id="smallFont2">
          $6250
        </div>
        <div className="col" id="smallFont2">
          12/04/2021
        </div>
      </div>
      <div className="row" id="btm-row">
        <div className="col" id="smallFont">
          Total spent of $6250
        </div>
        <div className="col" id="smallFont4">
          Remaining
        </div>
      </div>
      <div className="row">
        <div className="col" id="bigFont">
          $1265.24
        </div>
        <div className="col" id="bigFont2">
          $4984.76
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img src={StatusBarOne} width="300" />
          <p className="deductiblegraph">
            You <b>have not</b> reached the deductible or out-of-pocket maximum
            <br />
            <br />
            <span className="color-dark-blue">View my medical plan</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Medical;

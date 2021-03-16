import React from "react";
import "../SASS/Medical.sass";

const Pharmacy = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p className="pharmacygraph">Total spent on prescriptions</p>
        </div>
        <div className="col">
          <p className="pharmacygraph">Total active prescriptions</p>
        </div>
      </div>
      <div className="row">
        <div className="col" id="bigFont">
          $68.92
        </div>
        <div className="col" id="bigFont">
          5
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="deductiblegraph">
            <span className="color-dark-blue">
              Find more affordable prescriptions
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pharmacy;

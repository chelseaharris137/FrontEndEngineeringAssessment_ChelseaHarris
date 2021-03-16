import React from "react";
import "../SASS/RightBody.sass";
import Medical from "../components/Medical";
import Pharmacy from "../components/Pharmacy";
import Dental from "../components/Dental";

const RightBodyContent = (props) => {
  return (
    <div>
      <div className="updatestamp">Updated as of Jan 25 2021, 9:05pm</div>
      <div className="rightbackground">
        <h5>My Spending Overview</h5>
        <br />
        <hr />
        <h6>Medical</h6>
        <Medical />
        <hr />
        <h6>Pharmacy</h6>
        <Pharmacy />
        <hr />
        <h6>Dental</h6>
        <Dental />
      </div>
    </div>
  );
};

export default RightBodyContent;

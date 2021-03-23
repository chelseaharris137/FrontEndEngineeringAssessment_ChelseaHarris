import React from "react";
import RightBodyContent from "./RightBodyContent";
import LeftBodyContent from "./LeftBodyContent";
import "../SASS/MainContent.sass";

const MainContent = (props) => {
  return (
    <div className="container" id="custommargin">
      <div className="row">
        <div className="col">
          <LeftBodyContent cardData={props.cardData} />
        </div>

        <div className="col col-lg-4">
          <RightBodyContent />
        </div>
      </div>
    </div>
  );
};

export default MainContent;

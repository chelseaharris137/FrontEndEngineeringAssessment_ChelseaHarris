import React from "react";
import PharmacyIcons from "../images/PharmacyIcons.svg";
import DollarIcon from "../images/dollar.png";
import ClaimIcon from "../images/claimicon.png";
import DentistIcon from "../images/dentisticon.png";
import StethIcon from "../images/stethicon.png";
import Card from "../components/Card";

import "../SASS/LeftBody.sass";

const LeftBodyContent = (props) => {
  let cardData = props.cardData;

  let card = null;

  if (cardData) {
    card = cardData.map((newCard) => {
      return (
        <Card
          tinytext={newCard.tinytext}
          amount={newCard.amount}
          firstname={newCard.firstname}
          description={newCard.description}
          time={newCard.time}
          image={newCard.image}
          outterDivClass={newCard.outterDivClass}
        />
      );
    });
  }
  return (
    <div className="tilecontainer">
      <div className="swiper-slide-header">
        <div className="savings-slide">
          <div className="inner">
            <div className="left">
              <div className="left-txt">
                <p>
                  <h8>Welcome,</h8>
                  <h3>Jeff</h3>
                  <h7>Member since 3/25/21</h7>
                </p>
              </div>
            </div>
            <div className="mid-header">
              <p>
                Today's Potential Savings
                <br />
                <span className="color-green">$557</span>
              </p>
            </div>
            <div className="mid-header">
              <p>
                Your Lifetime Savings <br />
                <span className="color-green">$127</span>
              </p>
            </div>
            <div className="right-header">
              <p>
                The more actions you complete from the notifications below, the
                more you save!
              </p>
            </div>
          </div>
        </div>
      </div>
      {card}
      <div className="col-lg-12 text-center mmb-20" id="btn-padding-top">
        <a href="#" className="" id="btn-blue-new">
          View more <i className="fas fa-angle-right"></i>
        </a>
      </div>
    </div>
  );
};

export default LeftBodyContent;

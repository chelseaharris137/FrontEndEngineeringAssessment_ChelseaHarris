import React from "react";
import PharmacyIcons from "../images/PharmacyIcons.svg";
import DollarIcon from "../images/dollar.png";
import ClaimIcon from "../images/claimicon.png";
import DentistIcon from "../images/dentisticon.png";
import StethIcon from "../images/stethicon.png";
import "../SASS/LeftBody.sass";

const LeftBodyContent = (props) => {
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
      <div className="swiper-slide">
        <div className="savings-slide">
          <div className="inner">
            <div className="left">
              <div className="thumb">
                <img src={PharmacyIcons} alt="" />
              </div>
              <div className="left-txt">
                <p>
                  Save up to<span>$123</span>
                </p>
                <div className="author">Jeff</div>
              </div>
            </div>
            <div className="mid">
              <div className="author">Jeff</div>
              <p>
                <span className="color-orange">per year</span> on your Tier I
                prescription drug Promethazine if you go to an alternate
                pharmacy nearby.
              </p>
            </div>
            <div className="right">
              <div className="time">2 min ago</div>
              <a href="#" className="btn ps-btn btn-sm btn-blue-border">
                Save now <img src={DollarIcon} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-slide2">
        <div className="savings-slide">
          <div className="inner">
            <div className="left">
              <div className="thumb">
                <img src={ClaimIcon} alt="" />
              </div>
              <div className="left-txt">
                <p>
                  Save up to<span>$247</span>
                </p>
                <div className="author">Anna</div>
              </div>
            </div>
            <div className="mid">
              <div className="author">Anna</div>
              <p>
                by submitting your
                <span className="color-blue"> urgent care claim</span> dated
                October 27, 2020 to Guardian.
              </p>
            </div>
            <div className="right">
              <div className="time">9 min ago</div>
              <a href="#" className="btn ps-btn btn-sm btn-blue-border">
                Save now <img src={DollarIcon} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-slide3">
        <div className="savings-slide">
          <div className="inner">
            <div className="left">
              <div className="thumb">
                <img src={StethIcon} alt="" />
              </div>
              <div className="left-txt">
                <p>
                  Save up to<span>$123</span>
                </p>
                <div className="author">David</div>
              </div>
            </div>
            <div className="mid">
              <div className="author">David</div>
              <p>
                <span className="color-red">per visit</span> by changing to an
                in-network doctor for your recurring podiatry visits.
              </p>
            </div>
            <div className="right">
              <div className="time">23 min ago</div>
              <a href="#" className="btn ps-btn btn-sm btn-blue-border">
                Save now <img src={DollarIcon} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="swiper-slide3">
        <div className="savings-slide">
          <div className="inner">
            <div className="left">
              <div className="thumb">
                <img src={DentistIcon} alt="" />
              </div>
              <div className="left-txt">
                <p>
                  Dental cleanings<span>2/yr</span>
                </p>
                <div className="author">Jeff</div>
              </div>
            </div>
            <div className="mid">
              <div className="author">Jeff</div>
              <p>
                Schedule your
                <span className="color-red">
                  &nbsp;covered semi-annual dental cleaning
                </span>
                &nbsp; with a dentist nearest you. Its not too late.
              </p>
            </div>
            <div className="right">
              <div className="time">&nbsp;</div>
              <a href="#" className="btn ps-btn btn-sm btn-blue-border">
                Find dentist
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-slide">
        <div className="savings-slide">
          <div className="inner">
            <div className="left">
              <div className="thumb">
                <img src={PharmacyIcons} alt="" />
              </div>
              <div className="left-txt">
                <p>
                  Save up to<span>$23</span>
                </p>
                <div className="author">Jeff</div>
              </div>
            </div>
            <div className="mid">
              <div className="author">Jeff</div>
              <p>
                <span className="color-orange">per fill</span> on your Tier II
                prescription drug Foradil if you go to an alternate pharmacy
                nearby.
              </p>
            </div>
            <div className="right">
              <div className="time">3 days ago</div>
              <a href="#" className="btn ps-btn btn-sm btn-blue-border">
                Save now <img src={DollarIcon} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 text-center mmb-20" id="btn-padding-top">
        <a href="#" className="" id="btn-blue-new">
          View more <i className="fas fa-angle-right"></i>
        </a>
      </div>
    </div>
  );
};

export default LeftBodyContent;

import React from "react";
import "../SASS/Footer.sass";

const Footer = (props) => {
  return (
    <footer id="ps-footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="f-nav">
              <li>© Nayya Health, Inc. All rights reserved.</li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">GDPR Notice</a>
              </li>
              <li>
                <a href="#">Licenses</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

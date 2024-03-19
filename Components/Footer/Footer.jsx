import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          ANY <span>QUERIES</span>
        </h3>
        <p className="footer-links">
          <a href="#" className="link-1">
            Home
          </a>
          <a href="#">Blog</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Faq</a>
          <a href="#">Contact</a>
        </p>
        <p className="footer-company-name">HAPPY TRIPS © 2002</p>
      </div>
      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>444 S. ABC Towers</span> ABC hills , Hyderabad
          </p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p>+91 99999 99999</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:happytrips@company.com">happytrips@company.com</a>
          </p>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Happy Trips Company is dedicated to providing unforgettable travel
          experiences to adventurers around the globe. With our passion for
          exploration and commitment to customer satisfaction, we strive to make
          every journey a memorable and enriching adventure.
        </p>
        <div className="footer-icons">
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

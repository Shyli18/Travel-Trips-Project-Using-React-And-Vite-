import React from "react";
import "./Portfolio.scss";

import icon1 from "../../Assets/icon01.jpg";
import icon2 from "../../Assets/icon02.png";
import icon3 from "../../Assets/icon03.png";
import image from "../../Assets/gridImage.jpeg";

const Portfolio = () => {
  return (
    <div className="portfolio section container">
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="secHeading">
            <h3>Why Should You Choose Us</h3>
           
          </div>

          <div className="grid">
            <div className="singlePortfolio flex">
              <div className="iconDiv">
                <img src={icon1} alt="Icon Image" />
              </div>

              <div className="infor">
                <h4>Safety and Support</h4>
                <p>
                  Our top priority is the safety and well-being of our clients.
                  We maintain high safety standards and have emergency support
                  available during the trip.
                </p>
              </div>
            </div>

            <div className="singlePortfolio flex">
              <div className="iconDiv">
                <img src={icon2} alt="Icon Image" />
              </div>

              <div className="infor">
                <h4>Diverse Range of Destinations</h4>
                <p>
                  We offer a diverse range of destinations to choose from,
                  catering to various preferences and interests of our clients.
                </p>
              </div>
            </div>

            <div className="singlePortfolio flex">
              <div className="iconDiv">
                <img src={icon3} alt="Icon Image" />
              </div>

              <div className="infor">
                <h4>24/7 Customer Support</h4>
                <p>
                  Our dedicated customer support team is available 24/7 to
                  assist our clients with any queries or concerns they may have
                  before, during, or after their trip.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rightContent">
          <img src={image} alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

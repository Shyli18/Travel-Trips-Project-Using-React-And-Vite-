import React from "react";
import "./Review.scss";

import { AiFillStar } from "react-icons/ai";

import REVIEW1 from "../../Assets/review01.jpeg";
import REVIEW2 from "../../Assets/review02.jpeg";
import REVIEW3 from "../../Assets/review03.jpeg";
import REVIEW4 from "../../Assets/review04.jpeg";


const Review = () => {
  return (
    <div className="review section container">
      <div className="secContainer grid">
        <div className="textDiv">
          <span className="redText">FROM OUR CLIENTS</span>{" "}
          {/* Changed to all uppercase */}
          <h3>Real Travel History From Our Beloved Clients</h3>
          <p>
            By choosing us as their tour agency, customers can expect an
            enriching and enjoyable travel experience, filled with unforgettable
            memories that will last a lifetime.
          </p>
          <span className="stars flex">
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
          </span>
          <div className="clientImages flex">
            <img src={REVIEW1} alt="" />
            <img src={REVIEW2} alt="" />
            <img src={REVIEW3} alt="" />
            <img src={REVIEW4} alt="" />
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

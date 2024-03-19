import React from "react";
import "./Middle.scss";

const Middle = () => {
  return (
    <div className="middle section">
      <div className="gap" />
      <div className="secContainer container">
        <div className="grid">
          <div className="box">
            {" "}
            <span className="flex">
              <h1>10</h1>
              <p>World Of Experiences</p>
            </span>
          </div>

          <div className="box">
            <span className="flex">
              <h1>2K+</h1>
              <p>Fine destinations</p>
            </span>
          </div>

          <div className="box">
            <span className="flex">
              <h1>10K+</h1>
              <p>Customer Reviews</p>
            </span>
          </div>

          <div className="box">
            <span className="flex">
              <h1>4.8</h1>
              <p>Overall Rating</p>
            </span>
          </div>
        </div>
        <br></br>
      </div>
    </div>
  );
};

export default Middle;

import React from "react";
import { AiOutlineSwapRight } from "react-icons/ai";
import "./Home.scss";
import Video from "../../Assets/video.mp4";

const Home = () => {
  return (
    <div className="Home">
      <div className="videoBg">
        <video src={Video} autoPlay loop muted></video>
        <div className="sectionText">
          <h1>Unlock your travel dreams with us!</h1>
          <p>
            Discover the world's most adventurous nature. Life is too short for
            just one trip.
          </p>
          <button className="btn flex">
            GET STARTED
            <AiOutlineSwapRight className="icon" />
          </button>
        </div>
      </div>
      <div className="spacer" /> {/* Spacer element */}
    </div>
  );
};

export default Home;

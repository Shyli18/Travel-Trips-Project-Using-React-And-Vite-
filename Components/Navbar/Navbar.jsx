import React, { useState } from "react";
import "./Navbar.scss";
import { BiLogoMediumOld } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navBar">
      <div className="logoDiv">
        <BiLogoMediumOld className="icon" />
        <span> HappyTrips </span>
      </div>
      <div className={`menu ${showMenu ? "showNavbar" : ""}`}>
        <ul>
          <li className="navList">Destination</li>
          <li className="navList">About Us</li>
          <li className="navList">Testimonial</li>
          <li className="navList">Gallery</li>
        </ul>
        <AiFillCloseCircle className="icon closeIcon" onClick={toggleMenu} />
      </div>
      <button className="signUpBtn btn">Sign Up</button>
      <PiDotsNineBold className="icon menuIcon" onClick={toggleMenu} />
    </div>
  );
};

export default Navbar;

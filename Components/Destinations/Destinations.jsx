import React from "react";
import "./Destinations.scss";
import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { TiLocation } from "react-icons/ti";
import Image1 from "../../Assets/Image01.jpg"; // Import specific images for each destination
import Image2 from "../../Assets/Image02.jpg";
import Image3 from "../../Assets/Image03.jpg";
import Image4 from "../../Assets/Image04.jpg";
const destinations = [
  {
    id: 1,
    img: Image1,
    name: "Antelope Canyon",
    location: "USA",
    rating: 4.7,
  },
  {
    id: 2,
    img: Image2,
    name: "Santorini",
    location: "Greece",
    rating: 4.5,
  },
  {
    id: 3,
    img: Image3,
    name: "The Great Barrier Reef",
    location: " Australia",
    rating: 4.8,
  },
  {
    id: 4,
    img: Image4,
    name: "Machu Picchu",
    location: "Peru",
    rating: 4.3,
  },
  // Add other destination objects here
];

const Destinations = () => {
  return (
    <div className="destination section container">
      <div className="secContainer">
        <div className="secTitle">
          <span className="redText">
            <h1>EXPLORE NOW</h1>
          </span>
          <h3>Find Your Dream Destination</h3>
          <p>
            Fill in the fields below to find the best spot for your next tour.
          </p>
        </div>

        <div className="searchField grid">
          <div className="inputField flex">
            <MdLocationPin className="icon" />
            <input type="text" placeholder="Location" />
          </div>

          <div className="inputField flex">
            <BsFillCreditCardFill className="icon" />
            <input type="text" placeholder="Budget" />
          </div>

          <div className="inputField flex">
            <BsFillCalendarDateFill className="icon" />
            <input type="text" placeholder="Date" />
          </div>

          <button className="btn flex">
            <BsSearch className="icon" />
            Search
          </button>
        </div>

        <div className="destinationContainer grid">
          {destinations.map((destination) => (
            <div className="singleDestination" key={destination.id}>
              <div className="imgDiv">
                <img src={destination.img} alt="Destination Image" />

                <div className="descInfo flex">
                  <div className="text">
                    <span className="name">{destination.name}</span>
                    <p className="flex">
                      <TiLocation className="icon" />
                      {destination.location}
                    </p>
                  </div>
                  <span className="rating">{destination.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;

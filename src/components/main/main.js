import React from "react";
var mainImg = require("../../assets/main.png");
var buildingImg = require("../../assets/building.png");
var carImg = require("../../assets/car.png");
const Main = () => {
  return (
    <div className="main-row">
      <div className="column-large">
        <div className="butt">
          <p>TRAVEL</p>
        </div>
        <h3 className="text">
          Louvre Abu Dhabi marks 4th anniversary with world class exhibitions,
          programming for all
        </h3>

        <p className="text light-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in
          odio vel risus dignissim interdum.
        </p>
        <p className="subtitle">U. R. Oliver</p>
        <img className="main-img" src={mainImg} alt="Logo" />
      </div>
      <div className="column-mini">
        <div className="butt">
          <p>DINE</p>
        </div>
        <p className="text light-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in
          odio vel risus dignissim interdum.
        </p>
        <p className="subtitle">U. R. Oliver</p>
        <br />
        <div className="butt">
          <p>DINE</p>
        </div>
        <p className="text light-text">
          Phasellus in odio vel risus dignissim interdum. Sed vulputate pretium
          lobortis.
        </p>
        <p className="subtitle">U. R. Oliver</p>
        <br />
        <img className="car-img" src={carImg} alt="Logo" />

        <div className="butt">
          <p>OPEN HOUSE</p>
        </div>
        <p className="text light-text">
          Meals on wheels best food trucks in the UAE
        </p>
        <p className="subtitle">U. R. Oliver</p>
      </div>
      <div className="column-mini">
        <img className="car-img" src={buildingImg} alt="Logo" />
        <div className="butt">
          <p>DINE</p>
        </div>
        <p className="text light-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in
          odio vel risus dignissim interdum.
        </p>
        <p className="subtitle">U. R. Oliver</p>
        <br />
        <div className="butt">
          <p>DINE</p>
        </div>
        <p className="text light-text">
          Phasellus in odio vel risus dignissim interdum. Sed vulputate pretium
          lobortis.
        </p>
        <p className="subtitle">U. R. Oliver</p>
        <br />

        <div className="butt">
          <p>OPEN HOUSE</p>
        </div>
        <p className="text light-text">
          Meals on wheels best food trucks in the UAE
        </p>
        <p className="subtitle">U. R. Oliver</p>
      </div>
    </div>
  );
};

export default Main;

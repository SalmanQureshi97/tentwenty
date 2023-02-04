import React from "react";
var elipse1 = require("../../assets/banner.png");
const Banner = () => {
  return (
    <div className="banner">
      <img className="img" src={elipse1} alt="Logo" />

      <div className="top-left">
        <div className="butt">
          <p>LONG READ</p>
        </div>
      </div>

      <div className="centered">
        <p className="bold"> Meals on wheels: best in the UAE</p>
        <div className="subtitle">
          Louvre Abu Dhabi marks 4th anniversary with world class exhibition
          Louvre Abu Dhabi marks 4th anniversary with world class exhibitions,
          programming for all
        </div>
        <p>A. R. Oliver</p>
      </div>
    </div>
  );
};

export default Banner;

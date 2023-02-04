import React from "react";
var elipse1 = require("../../assets/RectangleSq.png");
var elipse2 = require("../../assets/RectangleSq1.png");
var elipse3 = require("../../assets/RectangleSq2.png");
var elipse4 = require("../../assets/RectangleSq3.png");
const SquareRow = () => {
  return (
    <div className="circle-row">
      <div className="column ">
        <img className="square-img" src={elipse1} alt="Logo" />
        <div className="butt">
          <p>Omar Mukhtar</p>
        </div>
        <div className="subtitle">
          Meals on wheels: Meals on wheels: best in the UAE best in Meals on
          wheels: best in
        </div>
        <p>U. R. Oliver</p>
      </div>
      <div className="column">
        <img className="square-img" src={elipse2} alt="Logo" />
        <div className="butt">
          <p>Lil Larry</p>
        </div>
        <div className="subtitle">
          Meals on wheels: Meals on wheels: best in the UAE best in Meals on
          wheels: best in
        </div>
        <p>U. R. Oliver</p>
      </div>{" "}
      <div className="column">
        <img className="square-img" src={elipse3} alt="Logo" />
        <div className="butt">
          <p>Lubna Hamdan</p>
        </div>
        <div className="subtitle">
          Meals on wheels: Meals on wheels: best in the UAE best in Meals on
          wheels: best in
        </div>
        <p>U. R. Oliver</p>
      </div>{" "}
      <div className="column">
        <img className="square-img" src={elipse4} alt="Logo" />
        <div className="butt">
          <p>Shawn John</p>
        </div>
        <div className="subtitle">
          Meals on wheels: Meals on wheels: best in the UAE best in Meals on
          wheels: best in
        </div>
        <p>U. R. Oliver</p>
      </div>
    </div>
  );
};

export default SquareRow;

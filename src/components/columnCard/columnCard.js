import React from "react";
var mainImg = require("../../assets/column.png");
var buildingImg = require("../../assets/column2.png");
var carImg = require("../../assets/column3.png");
const ColumnCard = () => {
  return (
    <div className="column-row">
      <div className="column">
        <img className="main-img" src={mainImg} alt="Logo" />
        <div className="butt">
          <p>OPEN HOUSE</p>
        </div>
        <p className="text ">
          Phasellus in odio vel risus dignissim interdum. Sed vulputate pretium
          lobortis.
        </p>
        <p className="subtitle">U. R. Oliver</p>
      </div>
      <div className="column">
        <div className="butt">
          <p>OPEN HOUSE</p>
        </div>
        <p className="text ">
          Phasellus in odio vel risus dignissim interdum. Sed vulputate pretium
          lobortis.
        </p>
        <p className="subtitle">U. R. Oliver</p>
        <br />
        <img className="main-img" src={carImg} alt="Logo" />
      </div>
      <div className="column">
        <img className="main-img" src={buildingImg} alt="Logo" />

        <br />
        <div className="butt">
          <p>OPEN HOUSE</p>
        </div>
        <p className="text">
          Phasellus in odio vel risus dignissim interdum. Sed vulputate pretium
          lobortis.
        </p>
        <p className="subtitle">U. R. Oliver</p>
      </div>
    </div>
  );
};

export default ColumnCard;

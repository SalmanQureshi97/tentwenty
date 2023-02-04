import React from "react";
var mainImg = require("../../assets/main.png");
var buildingImg = require("../../assets/building.png");
var carImg = require("../../assets/car.png");
const CircleRow = () => {
  return (
    <div className="circle-row">
      <div className="column">
        <img className="thumb-img" src={buildingImg} alt="Logo" />
        <div class="butt">
          <p>TRAVEL</p>
        </div>
      </div>
      <div className="column">
        <img className="thumb-img" src={buildingImg} alt="Logo" />
        <div class="butt">
          <p>TRAVEL</p>
        </div>
      </div>{" "}
      <div className="column">
        <img className="thumb-img" src={buildingImg} alt="Logo" />
        <div class="butt">
          <p>TRAVEL</p>
        </div>
      </div>{" "}
      <div className="column">
        <img className="thumb-img" src={buildingImg} alt="Logo" />
        <div class="butt">
          <p>TRAVEL</p>
        </div>
      </div>{" "}
      <div className="column">
        <img className="thumb-img" src={buildingImg} alt="Logo" />
        <div class="butt">
          <p>TRAVEL</p>
        </div>
      </div>
    </div>
  );
};

export default CircleRow;

import React from "react";
var elipse1 = require("../../assets/Ellipse 166.png");
var elipse2 = require("../../assets/Ellipse 166 (1).png");
var elipse3 = require("../../assets/Ellipse 166 (2).png");
var elipse4 = require("../../assets/Ellipse 166 (3).png");
var elipse5 = require("../../assets/Ellipse 166 (4).png");
const CircleRow = () => {
  return (
    <div className="circle-row">
      {" "}
      <div className="column">
        <img className="thumb-img" src={elipse1} alt="Logo" />
        <div className="butt">
          <p>Vladimir Putin</p>
        </div>
        <div className="subtitle">Meals on wheels best in the UAE</div>
      </div>{" "}
      <div className="column">
        <img className="thumb-img" src={elipse2} alt="Logo" />
        <div className="butt">
          <p>Vladimir Putin</p>
        </div>
        <div className="subtitle">Meals on wheels best in the UAE</div>
      </div>{" "}
      <div className="column">
        <img className="thumb-img" src={elipse3} alt="Logo" />
        <div className="butt">
          <p>Vladimir Putin</p>
        </div>
        <div className="subtitle">Meals on wheels best in the UAE</div>
      </div>{" "}
      <div className="column">
        <img className="thumb-img" src={elipse4} alt="Logo" />
        <div className="butt">
          <p>Vladimir Putin</p>
        </div>
        <div className="subtitle">Meals on wheels best in the UAE</div>
      </div>{" "}
      <div className="column">
        <img className="thumb-img" src={elipse5} alt="Logo" />
        <div className="butt">
          <p>Vladimir Putin</p>
        </div>
        <div className="subtitle">Meals on wheels best in the UAE</div>
      </div>
    </div>
  );
};

export default CircleRow;

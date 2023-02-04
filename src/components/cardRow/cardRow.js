import React from "react";
var elipse1 = require("../../assets/rectangleCard.png");
var elipse2 = require("../../assets/rectangleCard1.png");
var elipse3 = require("../../assets/rectangleCard2.png");
const CardRow = () => {
  return (
    <div className="card-row">
      <div className="card">
        <img className="thumb-img" src={elipse1} alt="Logo" />
        <div className="grid">
          <div className="butt">
            <p>Culture</p>
          </div>
          <div className="subtitle">Meals on wheels best in the UAE</div>
          <p>U. R. Oliver</p>
        </div>
      </div>{" "}
      <div className="card">
        <img className="thumb-img" src={elipse2} alt="Logo" />
        <div className="grid">
          <div className="butt">
            <p>Culture</p>
          </div>
          <div className="subtitle">Meals on wheels best in the UAE</div>
          <p>U. R. Oliver</p>
        </div>
      </div>{" "}
      <div className="card">
        <img className="thumb-img" src={elipse3} alt="Logo" />
        <div className="grid">
          <div className="butt">
            <p>Culture</p>
          </div>
          <div className="subtitle">Meals on wheels best in the UAE</div>
          <p>U. R. Oliver</p>
        </div>
      </div>
    </div>
  );
};

export default CardRow;

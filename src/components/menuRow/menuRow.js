import React from "react";
var meal1 = require("../../assets/meal.png");
var meal2 = require("../../assets/meal1.png");
var meal3 = require("../../assets/meal2.png");
var meal4 = require("../../assets/meal3.png");
var meal5 = require("../../assets/meal4.png");
var meal6 = require("../../assets/meal5.png");
const MenuRow = ({ type }) => {
  return (
    <div class="wrapper">
      <div className="card">
        <img className="thumb-img" src={meal1} alt="Logo" />
        <div className="grid">
          <div className="butt">
            <p>KETO KEBABS</p>
          </div>
          <div className="subtitle">Meals on wheels best in the UAE</div>
          <p>U. R. Oliver</p>
        </div>
      </div>
      <div className="card">
        <img className="thumb-img" src={meal2} alt="Logo" />
        <div className="grid">
          <div className="butt">
            <p>ITALIAN DESERTS</p>
          </div>
          <div className="subtitle">Meals on wheels best in the UAE</div>
          <p>U. R. Oliver</p>
        </div>
      </div>{" "}
      <div className="card">
        <img className="thumb-img" src={meal3} alt="Logo" />
        <div className="grid">
          <div className="butt">
            <p>JAPANESE FLAVOURS</p>
          </div>
          <div className="subtitle">Meals on wheels best in the UAE</div>
          <p>U. R. Oliver</p>
        </div>
      </div>{" "}
      <div className="card">
        <img className="thumb-img" src={meal4} alt="Logo" />
        <div className="grid">
          <div className="butt">
            <p>VEGAN MEALS</p>
          </div>
          <div className="subtitle">Meals on wheels best in the UAE</div>
          <p>U. R. Oliver</p>
        </div>
      </div>{" "}
      <div className="card">
        <img className="thumb-img" src={meal5} alt="Logo" />
        <div className="grid">
          <div className="butt">
            <p>FRENCH PASTA</p>
          </div>
          <div className="subtitle">Meals on wheels best in the UAE</div>
          <p>U. R. Oliver</p>
        </div>
      </div>{" "}
      <div className="card">
        <img className="thumb-img" src={meal6} alt="Logo" />
        <div className="grid">
          <div className="butt">
            <p>KOREAN BBQ</p>
          </div>
          <div className="subtitle">Meals on wheels best in the UAE</div>
          <p>U. R. Oliver</p>
        </div>
      </div>
    </div>
  );
};

export default MenuRow;

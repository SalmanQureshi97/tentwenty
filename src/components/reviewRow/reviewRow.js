import React from "react";
var elipse1 = require("../../assets/drink.png");
var elipse2 = require("../../assets/drink1.png");
var elipse3 = require("../../assets/drink2.png");
var elipse4 = require("../../assets/drink3.png");
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const ReviewRow = () => {
  return (
    <div className="review-row">
      <div className="column">
        <img className="square-img" src={elipse1} alt="Logo" />
        <div className="bottom-left">
          {" "}
          <FontAwesomeIcon icon={faStar} />
          4.4
        </div>
        <div className="butt">
          <p>EAT</p>
        </div>
        <div className="subtitle">
          Meals on wheels: Meals on wheels: best in the UAE best in Meals on
          wheels: best in
        </div>
        <p>U. R. Oliver</p>
      </div>
      <div className="column">
        <img className="square-img" src={elipse2} alt="Logo" />{" "}
        <div className="bottom-left">
          {" "}
          <FontAwesomeIcon icon={faStar} />
          4.4
        </div>
        <div className="butt">
          <p>EAT</p>
        </div>
        <div className="subtitle">
          Meals on wheels: Meals on wheels: best in the UAE best in Meals on
          wheels: best in
        </div>
        <p>U. R. Oliver</p>
      </div>{" "}
      <div className="column">
        <img className="square-img" src={elipse3} alt="Logo" />{" "}
        <div className="bottom-left">
          {" "}
          <FontAwesomeIcon icon={faStar} />
          4.4
        </div>
        <div className="butt">
          <p>EAT</p>
        </div>
        <div className="subtitle">
          Meals on wheels: Meals on wheels: best in the UAE best in Meals on
          wheels: best in
        </div>
        <p>U. R. Oliver</p>
      </div>{" "}
      <div className="column">
        <img className="square-img" src={elipse4} alt="Logo" />{" "}
        <div className="bottom-left">
          {" "}
          <FontAwesomeIcon icon={faStar} />
          4.4
        </div>
        <div className="butt">
          <p>EAT</p>
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

export default ReviewRow;

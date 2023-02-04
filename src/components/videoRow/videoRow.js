import React from "react";
var video1 = require("../../assets/video.png");
var video2 = require("../../assets/video(1).png");
var video3 = require("../../assets/video(2).png");

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const VideoRow = () => {
  return (
    <div className="video-row">
      <div className="column">
        <div class="container">
          <img className="square-img" src={video1} alt="Logo" />
          <div class="btn">
            {" "}
            <FontAwesomeIcon size="lg" icon={faPlay} />
          </div>
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
        <div class="container">
          <img className="square-img" src={video2} alt="Logo" />
          <div class="btn">
            {" "}
            <FontAwesomeIcon size="lg" icon={faPlay} />
          </div>
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
        {" "}
        <div class="container">
          <img className="square-img" src={video3} alt="Logo" />
          <div class="btn">
            {" "}
            <FontAwesomeIcon size="lg" icon={faPlay} />
          </div>
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

export default VideoRow;

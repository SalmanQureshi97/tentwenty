import React from "react";
var video1 = require("../../assets/video.png");
var video2 = require("../../assets/video(1).png");
var video3 = require("../../assets/video(2).png");

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className="footer">
      <div className="column">
        <div className="header">NEWS</div>
        <p>Featured News</p>
        <p>Latest News</p>
      </div>
      <div className="column">
        <div className="header">LIFE</div>
        <p>Latest News</p>
        <p>Fashion</p>
        <p>Dining</p>
        <p>Recipes</p>
        <p>Art & Culture</p>
        <p>Travel</p>
        <p>Motoring</p>
      </div>
      <div className="column">
        <div className="header">BUSINESS</div>
        <p>Open House</p>
        <p>What does that even mean?</p>
        <p>Homegrown</p>
        <p>How do I...</p>
        <p>Bag Off</p>
        <p>Where to spend it</p>
      </div>
      <div className="column last">
        <div className="header">SUBSCRIBE</div>
        <p>Get fresh updates about the fashion, beauty, trends</p>
        <div className="large-button">
          {" "}
          <p>Enter your email below </p> <p className="btn">Submit</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

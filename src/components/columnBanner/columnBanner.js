import React from "react";
var carImg = require("../../assets/glass.png");
const ColumnBanner = () => {
  return (
    <div className="column-banner">
      <div className="column">
        <div className="butt">
          <p>OPEN HOUSE</p>
        </div>
        <p className="text ">
          Phasellus in odio vel risus dignissim interdum. Sed vulputate pretium
          lobortis.
        </p>
        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in
          odio vel.
        </p>
      </div>
      <div className="column">
        <div className="butt centered">
          <p>ONE STORY, TWO PERSPECTIVES</p>
        </div>
        <img className="main-img" src={carImg} alt="Logo" />
      </div>
      <div className="column">
        <div className="butt white">
          <p>OPEN HOUSE</p>
        </div>
        <p className="text fadded">
          Phasellus in odio vel risus dignissim interdum. Sed vulputate pretium
          lobortis.
        </p>
        <p className="subtitle fadded">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in
          odio vel.
        </p>
      </div>
    </div>
  );
};

export default ColumnBanner;

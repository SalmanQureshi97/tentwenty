import React from "react";
var elipse1 = require("../../assets/rectangle.png");

const ArticleRow = () => {
  return (
    <div className="article-row">
      <div className="column-70">
        <img className="main-img" src={elipse1} alt="Logo" />
      </div>
      <div className="column-30">
        <div className="butt">
          <p>TRAVEL</p>
        </div>
        <h3 className="text">
          Louvre Abu Dhabi marks 4th anniversary with world class exhibitions,
          programming for all
        </h3>

        <p className="text light-text">
          Exhin imlave asfear asfasas afsfeaarsa asfasfasf asfasfa ten cultable
          doice inverum
        </p>
        <p className="subtitle">Cvita Doleschall</p>
      </div>
    </div>
  );
};

export default ArticleRow;

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon } from "@fortawesome/free-solid-svg-icons";
var logo = require("../../assets/logo.png");
const Header = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className="row">
      <div className="button-stack">
        <FontAwesomeIcon size="lg" icon={faBars} />
        <p> MENU</p>
        <FontAwesomeIcon
          onClick={toggleTheme}
          flip="horizontal"
          icon={faMoon}
        />
      </div>
      <div className="page-title">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Header;

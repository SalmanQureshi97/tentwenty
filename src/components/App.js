import React from "react";
import "../styles.scss";
import CircleRow from "./circleRow/circleRow";
import Header from "./header/header";
import Main from "./main/main";
import NavBar from "./navbar/navbar";
import Separator from "./separator/separator";

function App() {
  return (
    <div className="page">
      <Header />
      <NavBar />
      <Separator />
      <Main />
      <Separator />
      <h1 className="separator-text">1 ROW: 5 CIRCLES WITH BG</h1>
      <Separator />
      <CircleRow />
    </div>
  );
}
export default App;

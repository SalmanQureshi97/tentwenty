import React from "react";
import "../styles.scss";
import ArticleRow from "./articleRow/articleRow";
import Banner from "./banner/banner";
import CardRow from "./cardRow/cardRow";
import CircleRow from "./circleRow/circleRow";
import ColumnBanner from "./columnBanner/columnBanner";
import ColumnCard from "./columnCard/columnCard";
import Footer from "./footer/footer";
import Header from "./header/header";
import LowerNavBar from "./lowerNavbar/lowerNavbar";
import Main from "./main/main";
import MenuRow from "./menuRow/menuRow";
import NavBar from "./navbar/navbar";
import ReviewRow from "./reviewRow/reviewRow";
import Separator from "./separator/separator";
import SquareRow from "./squareRow/squareRow";
import VideoRow from "./videoRow/videoRow";

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
      <Separator />
      <h1 className="separator-text-2">2 rows: 1 x 3</h1>
      <Separator />
      <ArticleRow />
      <CardRow />
      <Separator />
      <h1 className="separator-text-3">1 row: 4 with bg</h1>
      <Separator />
      <SquareRow />
      <Separator />
      <h1 className="separator-text-4">1 full width article</h1>
      <Separator />
      <Banner />
      <Separator />
      <h1 className="separator-text">1 row: 2 x 1 inverted</h1>
      <Separator />
      <ColumnCard />
      <Separator />
      <h1 className="separator-text-5">1 row: 2 stories with bg</h1>
      <Separator />
      <ColumnBanner />
      <Separator />
      <h1 className="separator-text-6">1 row: 4 reviews</h1>
      <Separator />
      <ReviewRow />
      <Separator />
      <h1 className="separator-text-4">2 rows: 3 x 3</h1>
      <Separator />
      <MenuRow type="1" />
      <Separator />
      <h1 className="separator-text-2">1 row: 3 video</h1>
      <Separator />
      <VideoRow />
      <Separator />
      <Footer />
      <LowerNavBar />
      <Separator />
    </div>
  );
}
export default App;

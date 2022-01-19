import "./App.css";
import React, { useEffect } from "react";
import Header from "./components/header/Header";
import Carousel from "./components/carousel/Carousel";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Carousel />
    </React.Fragment>
  );
}

export default App;

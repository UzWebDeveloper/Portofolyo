import React from "react";
import "./Home.scss";
import NavBar from "./BoxLeft/NavBar";
import RightBar from "./BoxRight/RightBar";
import Header from "./BoxCenter/Header/Header";
import Section from "./BoxCenter/Section/Section";

export default function Home() {
  return (
    <div className="Home">
      <div className="continer">
        <div className="Box">
          <div className="BoxLeft">
            <NavBar />
          </div>

          <div className="BoxCenter">
            <div className="boxCenter__top">
              <Header />            
            </div>
            <div className="boxCenter__bottom">
              <Section token={process.env.REACT_APP_INS_TOKEN} limit={7} />
            </div>
          </div>

          

          <div className="BoxRight">
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  );
}

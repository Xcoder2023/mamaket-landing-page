import React from "react";
import "./Banner.css";
import logo from "../assets/mamket-header-img/Logo.png";
import products from "../assets/mamket-header-img/Component 1.png";

const Banner = () => {
  return (
    <>
      <div className="vessel">
        <div className="logo">
          <img src={logo} alt="" />
          <div className="harmbuger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
        <div className="brave-print">
          <div className="usa-africa">
            <div className="african">
              <p>Looking to sell African</p>
            </div>
            <div className="USA">
              <p>things in the USA?</p>
            </div>
          </div>
          <div className="mamaket-btn">
            <button className="mamaket-btn2">Join Mamaket</button>
          </div>
          <div className="small-print">
            <p>
              An African marketplace for buying, selling and celebrating culture
            </p>
          </div>
        </div>
        <div className="green-div"></div>
        <div className="goods">
          <img src={products} alt="goods-img" />
        </div>
        <div className="start">
          <p>why you should start with us</p>
        </div>
      </div>
    </>
  );
};

export default Banner;

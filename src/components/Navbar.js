import React from "react";
import { info } from "./productinfo";

import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <div className="background">
        <div className="navbar">
          <div className="flexbox">
            <div className="logo">
              <img className="logoclass" src="./Final white-07.png" alt="" />
            </div>
          </div>
          <div className="mainpagetext">
            <div className="gridcontainer">
              <div className="griditem1">
                <h1>
                  Get great deals on cool fitness merch and gym accessories.
                </h1>
              </div>
              <div
                className="griditem2"
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <h1>The Winter Sale</h1>
              </div>
              <div
                className="griditem3"
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <h2>Flat 20% Off</h2>
              </div>
              <div className="griditem4">
                <button className="shopnowbutton">SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1
            className="griditem5"
            style={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            Best fitness apparel delivered to your doorstep anywhere in India!
          </h1>
        </div>
        <div
          className="griditem6"
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <h1>
            Shop from our wide variety of apparel to get your cool gym fit
            today!
          </h1>
        </div>
        <div className="productArrayContainer">
          {info.map((data) => (
            <div
              className="productArrayItem"
              style={{ width: "100%", height: "100%" }}
            >
              <img src={data.image} style={{ height: "250px" }}></img>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  height: "40px",
                  padding: "10px",
                }}
              >
                <h1>{data.productname}</h1>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <h1>{data.price}</h1>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <img src={data.rating} style={{ height: "30px" }}></img>
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;

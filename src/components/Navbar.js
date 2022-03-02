import React from "react";
import { link } from "react-router-dom";
import { info } from "./productinfo";
import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <div className="background">
        <div className="navbar">
          <div className="flexbox">
            {/* <link> */}
            <div className="logo">
              <img className="logoclass" src="./Final white-07.png" alt="" />
            </div>
            {/* </link> */}
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
                <h1>The Spring Sale</h1>
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
            Best fitness apparel delivered to your doorstep anywhere in the
            World!
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
                  fontSize: "15px",
                  color: "white",
                }}
              >
                <h1>{data.productname}</h1>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  fontSize: "15px",
                  color: "white",
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
        <div className="footerContainer">
          <div className="footerList">
            <ul className="listUnstyled">
              <li>Support</li>
              <li>Help Centre</li>
              <li>Contact Us</li>
              <li>Return/Exchange Policy</li>
            </ul>
          </div>
          <hr />
          <div className="footerCopyright">
            &copy;{new Date().getFullYear()} TEAM AESTHETIX INC | ALL RIGHTS
            RESERVED | TERMS OF SERVICE | PRIVACY
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

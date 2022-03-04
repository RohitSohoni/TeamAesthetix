import React from "react";
import { useRef } from "react";
import { info } from "./productinfo";
import "./Navbar.css";
import StarRatings from "react-star-ratings";

function Navbar() {
  const shopNowScroll = useRef(null);
  const gotoshopNowScroll = () => {
    console.log(shopNowScroll.current.offsetTop);
    // document
    //   .getElementById("scroller")
    //   .scroll(
    //     0,
    //     shopNowScroll.current.offsetTop -
    //       (shopNowScroll.current.offsetTop * 10) / 100
    //   );
    // window.scrollTo({
    //   top: shopNowScroll.current.offsetTop,
    //   behavior: "smooth",
    // });
    document.getElementById("reference").scrollIntoView({
      behavior: "smooth",
    });
  };

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
                <button className="shopnowbutton" onClick={gotoshopNowScroll}>
                  SHOP NOW
                </button>
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
          ref={shopNowScroll}
          id="reference"
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
              // send "data" variable as props to redirect activity
            >
              <img
                src={data.image}
                style={{ height: "250px", borderRadius: "10px" }}
              ></img>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  height: "40px",
                  fontSize: "15px",
                  color: "black",
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
                  color: "black",
                  marginTop: "10px",
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
                <StarRatings
                  rating={data.rating}
                  starRatedColor="orange"
                  numberOfStars={5}
                  name="rating"
                  starEmptyColor="white"
                  starDimension="30px"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="footerContainer">
          <div className="newsletterClass">
            <div className="newsletterText">
              <h1>Sign Up For TeamX Newsletter</h1>
            </div>
            <div className="newsletterEmailBox">
              <input
                type="email"
                placeholder="Your Email Address"
                className="newsletterEmail"
              ></input>
            </div>
          </div>
          <div className="signUpClass">
            <button className="signUpButton">SIGN UP</button>
          </div>
          <div className="socialLinks">
            <h1>FOLLOW US ON:</h1>
            <img className="allLogo" src="./instagram.png" alt="" />
            <img className="allLogo" src="./facebook.png" alt="" />
            <img className="allLogo" src="./twitter.png" alt="" />
          </div>
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

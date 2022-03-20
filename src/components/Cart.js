import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import StarRatings from "react-star-ratings";
import "./cart.css";

function Cart() {
  var currentCart = {};
  if (JSON.parse(localStorage.getItem("cartItem")) !== null) {
    currentCart = JSON.parse(localStorage.getItem("cartItem"));
  }

  console.log(JSON.parse(localStorage.getItem("cartItem")));

  const [isClicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
  };
  const handleClickAlert = () => {
    alert("Thank You For Your Purchase");
  };
  if (isClicked === false) {
    return (
      <div className="background3">
        <div>
          <div className="logo2">
            <img className="logoclass2" src="./Final white-07.png" alt="" />
          </div>
        </div>
        <div className="testclass">
          {Object.keys(currentCart).map((key) => {
            var data = currentCart[key];
            return (
              <div className="productArrayItemGrid">
                <div className="productArrayItemCart">
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
              </div>
            );
          })}
          <div className="proceedButtonClass">
            <button onClick={handleClick} className="proceedButton">
              Proceed
            </button>
          </div>
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
    );
  } else {
    return (
      <div className="reserveMain">
        <div className="reserveForm">
          <div className="reserveInputName">
            <input
              type="text"
              className="reserveName"
              placeholder="Name"
            ></input>
          </div>
          <div className="reserveInputEmail">
            <input
              type="text"
              className="reserveEmail"
              placeholder="Email"
            ></input>
          </div>
          <div className="buyButtonClass">
            <button onClick={handleClickAlert} className="buyButton">
              Buy
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;

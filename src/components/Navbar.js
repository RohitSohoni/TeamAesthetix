import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { info } from "./productinfo";
import "./Navbar.css";
import StarRatings from "react-star-ratings";
import { useNavigate } from "react-router-dom";
import Productpage from "./ProductPage";

function Navbar() {
  //For Scrolling to products when click on Shop Now

  const shopNowScroll = useRef(null);
  const gotoshopNowScroll = () => {
    document.getElementById("reference").scrollIntoView({
      behavior: "smooth",
    });
  };

  //For The Search bar

  const [query, setQuery] = useState("");

  //For navigating when clicked on a product

  const [Result, setResult] = useState(false);
  const [selectedProduct, setselectedProduct] = useState("");
  var x = {};

  let navigate = useNavigate();
  const routeChange = (product) => {
    // <Productpage name={"helloworld"} />;
    let path = "ProductPage";
    setselectedProduct(product);
    setResult(true);
    // navigate(path, { state: { name: "Hello" } });
  };

  //For back button in the product window
  const backbutton = () => {
    setResult(false);
  };

  if (Result === false)
    return (
      <>
        <header>
          <div className="background">
            <div className="navbar">
              <div className="flexbox">
                <div className="logo">
                  <img
                    className="logoclass"
                    src="./Final white-07.png"
                    alt=""
                  />
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
                    <h1>The Spring Sale is here!</h1>
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
                    <button
                      className="shopnowbutton"
                      onClick={gotoshopNowScroll}
                    >
                      SHOP NOW
                    </button>
                  </div>
                  <div
                    className="griditem5"
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >
                    <h1>
                      Best fitness Equipments delivered to your doorstep
                      anywhere in the World!
                    </h1>
                  </div>
                  <div
                    className="griditem6"
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >
                    <h1>
                      Shop from our wide variety of Equipments and avail the
                      Offer Today!
                    </h1>
                  </div>
                </div>
              </div>
              <div className="SearchButtonDiv" id="reference">
                <input
                  type="search"
                  placeholder="Search"
                  onChange={(event) => setQuery(event.target.value)}
                  className="searchInputBox"
                ></input>
              </div>
            </div>

            <div className="productArrayContainer">
              {
                (x = info
                  .filter((data) => {
                    if (query === "") {
                      return data;
                    } else if (
                      data.productname
                        .toLowerCase()
                        .includes(query.toLowerCase())
                    ) {
                      return data;
                    }
                  })

                  .map((data) => (
                    <div
                      className="productArrayItem"
                      style={{ width: "100%" }}
                      onClick={() => routeChange(data)}
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
                  )))
              }
            </div>
            <div>
              {x.length === 0 ? (
                <div className="error">
                  {console.log("No")}
                  <h1>We Do Have "EVERYTHING", Just Not This:(</h1>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="footer">
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
      </>
    );
  else
    return (
      <div className="background2">
        <div className="productInformationCard">
          <div className="flexbox">
            <div className="logo">
              <img className="logoclass" src="./Final white-07.png" alt="" />
            </div>
          </div>
          <div className="productContainerCard2">
            <div
              className="productArrayItem2"
              style={{ width: "100%" }}
              // send "data" variable as props to redirect activity
            >
              <div
                className="productImg"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={selectedProduct.image}
                  style={{ height: "200px", borderRadius: "10px" }}
                ></img>
              </div>
              <div
                className="productname"
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  height: "70px",
                  fontSize: "15px",
                  color: "white",
                  alignItems: "flex-end",
                }}
              >
                <h1>{selectedProduct.productname}</h1>
              </div>
              <div
                className="price"
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  fontSize: "15px",
                  color: "white",
                  height: "40px",
                  alignItems: "center",
                }}
              >
                <h1>{selectedProduct.price}</h1>
              </div>
              <div
                className="productDescription"
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-evenly",
                  color: "white",
                  textAlign: "center",
                  flexWrap: "wrap",
                }}
              >
                <p>{selectedProduct.description}</p>
              </div>
              <div
                className="rating"
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <StarRatings
                  rating={selectedProduct.rating}
                  starRatedColor="orange"
                  numberOfStars={5}
                  name="rating"
                  starEmptyColor="white"
                  starDimension="30px"
                />
              </div>
              <div className="AddtoCartDiv">
                <button className="AddtoCartbutton">Add to Cart</button>
              </div>
              <div className="BackButtonDiv">
                <button className="BackButton" onClick={backbutton}>
                  Back
                </button>
              </div>
            </div>
            {/* <p>{selectedProduct.productname}</p>
            <p>{selectedProduct.price}</p> */}
          </div>
        </div>
        <div className="footerContainer1">
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
}

export default Navbar;

import React from "react";
import "./ProductPage.css";
// import { useLocation } from "react-router-dom";

function productpage() {
  // console.log(props.location.state);
  // const location = useLocation();
  // console.log(props.location.state.name);
  return (
    <div className="background2">
      <div className="productInformationCard">
        <div className="flexbox">
          <div className="logo">
            <img className="logoclass" src="./Final white-07.png" alt="" />
          </div>
        </div>
        <div className="productContainerCard">
          {/* <p>{dataFromProductData}</p> */}
          {/* <p>name: {data.productname}</p> */}
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
}

export default productpage;

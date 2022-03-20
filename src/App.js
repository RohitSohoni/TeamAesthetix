import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Navbar />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

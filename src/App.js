import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Navbar />} />
          <Route path="/ProductPage" element={<ProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

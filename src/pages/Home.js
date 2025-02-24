import React from "react";
import Navbar from "../components/Navbar";
import "../styles.css"; // Import styles

const Home = () => {
  return (
    <div className="home-container">
      <Navbar page="home" />
      <div className="content">Welcome to FarmAid - Helping Farmers Detect Crop Diseases</div>
    </div>
  );
};

export default Home;

import React from "react";
import Navbar from "../components/Navbar";
import "../styles.css"; // Import styles

const AppPage = () => {
  return (
    <div className="app-container">
      <Navbar page="app" />
      <div className="content">Disease Detection App Coming Soon...</div>
    </div>
  );
};

export default AppPage;

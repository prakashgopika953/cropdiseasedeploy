import React from "react";
import Navbar from "../components/Navbar";
import "../styles.css"; // Import styles

const Library = () => {
  return (
    <div className="library-container">
      <Navbar page="library" />
      <div className="content">Library Resources Coming Soon...</div>
    </div>
  );
};

export default Library;

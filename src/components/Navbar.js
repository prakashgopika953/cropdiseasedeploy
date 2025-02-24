import React from "react";
import { NavLink } from "react-router-dom";
import "../styles.css"; // Import styles

const Navbar = ({ page }) => {
  return (
    <nav className="navbar">
      <div className="logo">AgriGuard</div>
      <div className="nav-links">
        {page !== "home" && <NavLink to="/" className="nav-item">Home</NavLink>}
        {page !== "app" && <NavLink to="/app" className="nav-item">App</NavLink>}
        {page !== "blog" && <NavLink to="/blog" className="nav-item">Blog</NavLink>}
        {page !== "library" && <NavLink to="/library" className="nav-item">Library</NavLink>}
      </div>
    </nav>
  );
};

export default Navbar;

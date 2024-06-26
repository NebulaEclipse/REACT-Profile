import React from "react";
import { Link } from "react-router-dom";
import '../styles/navbar.css'
function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Contact Page</Link>
      </div>
    </div>
  );
}

export default Navbar;
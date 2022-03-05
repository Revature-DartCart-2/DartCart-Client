import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-header">
      <ul
        className="navbar-nav mr-auto link-container"
        style={{ textAlign: "center" }}
      >
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="register">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            Explore
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

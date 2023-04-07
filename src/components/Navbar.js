import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navlinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#020202" : "#8C8989",
      fontSize : isActive ? "30px" : "23px",
    };
  };
  const homelinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#020202" : "#8C8989",
      fontSize : isActive ? "30px" : "23px",

    };
  };

  return (
    <>
      <section>
        <nav className="container-fluid text-center">
          <div className="container py-4 mt-3 px-0 fs-4">
            <NavLink
              className="navbar-brand   me-3"
              style={homelinkStyles}
              to="/"
            >
              Home
            </NavLink>
            
            <NavLink
              className="navbar-brand   mx-3"
              style={navlinkStyles}
              to="/search"
            >
              Search
            </NavLink>
            
            <NavLink
              className="navbar-brand   mx-3"
              style={navlinkStyles}
              to="/technology"
            >
              Technology
            </NavLink>
            
            <NavLink
              className="navbar-brand  mx-3"
              style={navlinkStyles}
              to="/business"
            >
              Business
            </NavLink>
            <NavLink
              className="navbar-brand  mx-3"
              style={navlinkStyles}
              to="/Educational"
            >
              Educational
            </NavLink>
            <NavLink
              className="navbar-brand  mx-3"
              style={navlinkStyles}
              to="/nature"
            >
              Nature
            </NavLink>
            <NavLink
              className="navbar-brand  mx-3"
              style={navlinkStyles}
              to="/health"
            >
              Health
            </NavLink>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;

import React from "react";
import "./home.css";
import { NavLink } from "react-router-dom";
import img from "./Menu/resources/social_media.png"

const Home = () => {
  return (
    <>
      <div className="bg postion-relative ">
        <img src={img} alt="" className="position-absolute mt-5 top-50 end-0 translate-middle-y" style={{width:"900px"}}/>
      </div>
    </>
  );
};

export default Home;

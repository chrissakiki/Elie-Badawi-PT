import React from "react";
import "./Loader.scss";
import Logo from "../../assets/images/logo.webp";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="logo-container">
        <img src={Logo} alt="Elie Badawi Logo" />
        <h5>Elie Badawi - Certified Personal Trainer</h5>
      </div>
    </div>
  );
};

export default Loader;

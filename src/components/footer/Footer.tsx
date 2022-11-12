import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import "./footer.scss";
import { Link } from "react-scroll";
import Privacy from "../privacy/Privacy";
import Terms from "../terms/Terms";

const Footer = () => {
  const [showPP, setShowPP] = React.useState(false);
  const [showTerms, setShowTerms] = React.useState(false);
  return (
    <div className="footer-wrapper">
      <div className="container">
        <div className="icons-container">
          <a
            href="https://www.facebook.com/eliebadawi.official"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/eliebadawi_official/"
            target="_blank"
          >
            <AiOutlineInstagram className="insta" />
          </a>

          <a
            href="https://api.whatsapp.com/send/?phone=9613001203"
            target="_blank"
          >
            <BsWhatsapp />
          </a>
        </div>

        <div className="menu">
          <Link to="home" className="links">
            Home
          </Link>
          <Link to="works" className="links">
            Education
          </Link>
          <Link to="services" className="links" offset={50}>
            Services
          </Link>
          <Link to="reviews" className="links">
            Testimonials
          </Link>
          <Link to="packages" className="links" offset={50}>
            Pricing
          </Link>
          <p className="links" onClick={() => setShowPP(true)}>
            Privacy Policy
          </p>
          <p className="links" onClick={() => setShowTerms(true)}>
            Terms and conditions
          </p>
        </div>

        <p>@2022 Elie Badawi | All Rights Reserved</p>
      </div>

      {showPP && <Privacy setShowPP={setShowPP} />}
      {showTerms && <Terms setShowTerms={setShowTerms} />}
    </div>
  );
};

export default Footer;

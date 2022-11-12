import React from "react";
import "./navbar.scss";
import { Link } from "react-scroll";
import Logo from "../../assets/images/logo.webp";
import { AiOutlineAlignLeft } from "react-icons/ai";
import * as Scroll from "react-scroll";

var Element = Scroll.Element;
const Navbar = () => {
  const [onScroll, setOnScroll] = React.useState(false);
  const [mobile, setMobile] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      return setOnScroll(true);
    }

    setOnScroll(false);
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Element name="home">
      <div className={onScroll ? "navbar-wrapper scrolling" : "navbar-wrapper"}>
        <div className={mobile ? "container mobile" : "container"}>
          <div className="left">
            <Link to="home">
              <img className="logo" src={Logo} alt="elie badawi logo" />
            </Link>
          </div>

          <div className={mobile ? "right mobile" : "right"}>
            <Link
              to="education"
              spy={true}
              className="nav-link"
              activeClass="activeLink"
              onClick={() => setMobile(false)}
            >
              Education
            </Link>
            <Link
              to="services"
              spy={true}
              className="nav-link"
              activeClass="activeLink"
              onClick={() => setMobile(false)}
            >
              Services
            </Link>
            <Link
              to="reviews"
              spy={true}
              className="nav-link"
              activeClass="activeLink"
              onClick={() => setMobile(false)}
            >
              Testimonial
            </Link>
            <Link
              to="pricing"
              spy={true}
              className="nav-link"
              activeClass="activeLink"
              onClick={() => setMobile(false)}
            >
              Pricing
            </Link>
            <Link
              to="contact"
              spy={true}
              className="nav-link"
              activeClass="activeLink"
              onClick={() => setMobile(false)}
            >
              Consultation
            </Link>
          </div>
          <div className="burger" onClick={() => setMobile((prev) => !prev)}>
            <AiOutlineAlignLeft />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Navbar;

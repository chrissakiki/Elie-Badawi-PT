import "./hero.scss";
import Elie1 from "../../assets/images/elie1.webp";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="container">
        <div className="text-content">
          <h1>
            Functional <span>Again</span>
          </h1>
          <p>
            Excellence in fitness since <span className="date">2012</span>.
          </p>

          <div className="button-container">
            <Link to="contact">
              {" "}
              <button className="btn-primary">Consultation</button>
            </Link>
            <Link to="education">
              <button className="btn-outlined">Explore More</button>
            </Link>
          </div>
        </div>

        <div className="icons-container">
          <a
            href="https://www.facebook.com/eliebadawi.official"
            target="_blank"
          >
            <BsFacebook className="fb-icon" />
          </a>
          <a
            href="https://www.instagram.com/eliebadawi_official/"
            target="_blank"
          >
            <AiFillInstagram className="insta-icon" />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=9613001203"
            target="_blank"
          >
            <IoLogoWhatsapp className="wa-icon" />
          </a>
        </div>

        <div className="img-container">
          <img src={Elie1} alt="Personal Trainer" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

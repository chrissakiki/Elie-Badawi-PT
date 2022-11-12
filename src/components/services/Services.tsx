import "./services.scss";
import { FaDumbbell, FaRunning, FaLaptop } from "react-icons/fa";
import * as Scroll from "react-scroll";

var Element = Scroll.Element;
const Services = () => {
  const servicesArr = [
    {
      name: "Functional Training",
      icon: <FaDumbbell />,
      text: "This service provides 1-on-1 sessions designed to help you develop usable strength applicable during your daily activities or competitive sports depending on your training goals.",
    },
    {
      name: "Movement Therapy",
      icon: <FaRunning />,
      text: "This service combines posture adjustment, pain management and injury recovery to reduce chronic discomfort using corrective exercises and techniques.",
    },
    {
      name: "Virtual Training",
      icon: <FaLaptop />,
      text: "This service offers movement therapy or functional training based on your needs anytime and anywhere through live online sessions.",
    },
  ];
  return (
    <Element name="services">
      <div className="services-wrapper">
        <div className="container">
          <h2 data-aos="fade-in">
            Explore Our <span className="stroke-text">Services</span>
          </h2>

          <div className="services">
            {servicesArr.map((serv) => (
              <div className="service" key={serv.name}>
                <div
                  className="header"
                  data-aos="zoom-in"
                  data-aos-easing="ease-out-cubic"
                >
                  {serv.icon}
                </div>
                <div className="main" data-aos="fade-in">
                  <h3>{serv.name}</h3>
                  <p>{serv.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Services;

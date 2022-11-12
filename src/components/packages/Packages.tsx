import React from "react";
import "./packages.scss";
import { IoIosArrowForward } from "react-icons/io";
import * as Scroll from "react-scroll";

var Element = Scroll.Element;

const Packages = () => {
  const packagesArr = [
    {
      pricing: 480,
      name: "Functional Training",
      time: 60,
      list: [
        "Movement Screening",
        "Biomechanical Assessment",
        "Yearly Planification",
        "Customized Program",
        "Pre/post Phases Tests",
        "12 Working Sessions",
        "Free Consultation",
      ],
    },
    {
      pricing: 350,
      name: "Movement Therapy",
      time: 90,
      list: [
        "Pain Clearance Tests",
        "Biomechanical Assessment",
        "Assisted Myofascial Release",
        "Restorative Exercises",
        "5 Working Sessions",
        "Free Consultation",
      ],
    },
    {
      pricing: 480,
      name: "Virtual Training",
      time: 60,
      list: [
        "Virtual Movement Screening",
        "Virtual Biomechanical Assessment",
        "Yearly Planification",
        "Customized Program",
        "Pre/post Phases Tests",
        "12 Working Sessions",
        "Free Consultation",
      ],
    },
  ];
  return (
    <Element name="pricing">
      <div className="packages-wrapper">
        <div className="container">
          <h2 data-aos="fade-in">
            Ready To Start <span className="stroke-text">Your Journey</span>
          </h2>

          <h3 data-aos="zoom-in"> Pricing Plans</h3>
          <div className="packages" data-aos="fade-left">
            {packagesArr.map((pack) => (
              <div className="package" key={pack.name}>
                <div className="header">
                  <h4>${pack.pricing}</h4>
                  <h5>{pack.time} minutes</h5>

                  <p>{pack.name}</p>
                </div>

                <ul className="main">
                  {pack.list.map((list) => (
                    <li key={list}>
                      <IoIosArrowForward /> {list}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Packages;

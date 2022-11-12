import React from "react";
import "./contact.scss";
import Elie2 from "../../assets/images/elie2.webp";

import * as Scroll from "react-scroll";

var Element = Scroll.Element;
const Contact = () => {
  const [fullName, setFullName] = React.useState("");
  const [objective, setObjective] = React.useState("Functional Training");
  const [selectedDate, setSelectedDate] = React.useState("");
  const [selectedTime, setSelectedTime] = React.useState("");

  const ServicesArr = [
    "Functional Training",
    "Movement Therapy",
    "Virtual Training",
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!fullName || !objective || !selectedDate || !selectedTime) {
      return;
    }

    const message = encodeURIComponent(
      `Hi, I'm ${fullName} and I would like to have a consultation.  \nObjective: ${objective}.  \nDate: ${selectedDate} | ${selectedTime}`
    );

    window.location.replace(`https://wa.me/9613001203?text=${message}`);
  };
  return (
    <Element name="contact">
      <div className="contact-wrapper">
        <div className="container">
          <h2 data-aos="fade-in">Free Consultation</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name:</label>
              <input
                id="name"
                type="text"
                className="form-input"
                placeholder="Elie"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Objective:</label>
              <select
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
              >
                {ServicesArr.map((serv) => (
                  <option key={serv} value={serv}>
                    {serv}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input
                id="date"
                type="date"
                className="form-input"
                onChange={(e) => setSelectedDate(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="time">Time:</label>
              <input
                id="time"
                type="time"
                className="form-input"
                onChange={(e) => setSelectedTime(e.target.value)}
                required
              />
            </div>

            <div className="button-container">
              <button type="submit" className="btn-outlined">
                {" "}
                Submit{" "}
              </button>
            </div>
          </form>
          <div className="img-container">
            <img src={Elie2} alt="Personal Trainer" data-aos="zoom-in" />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;

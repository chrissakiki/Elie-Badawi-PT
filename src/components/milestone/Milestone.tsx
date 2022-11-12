import "./milestone.scss";
import CountUp from "react-countup";

const Milestone = () => {
  return (
    <div className="milestone-wrapper">
      <div className="item">
        <span className="numbers">
          <CountUp start={0} end={11} duration={1.3} />
          k+
        </span>

        <span className="text">Training Sessions</span>
      </div>
      <div className="item">
        <span className="numbers">
          <CountUp start={0} end={10} duration={1.3} />+
        </span>

        <span className="text">Years of Experience</span>
      </div>
      <div className="item">
        <span className="numbers">
          <CountUp start={50} end={100} duration={1.3} />+
        </span>

        <span className="text">Clients Worldwide</span>
      </div>
      <div className="item">
        <span className="numbers">
          <CountUp start={0} end={23} duration={1.3} />+
        </span>

        <span className="text">International Certificates</span>
      </div>
    </div>
  );
};

export default Milestone;

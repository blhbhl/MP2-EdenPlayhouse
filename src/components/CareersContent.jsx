import React from "react";
import CareersBanner from "./CareersBanner";

const Careers = () => {
  return (
    <div className="body">
      <CareersBanner />
      <div className="careers-border">
        <p className="one">
          Looking for a fun, exciting and challenging work environment? Join
          Eden Playhouse and Learning Center Inc. now!<br></br> At Eden Playhouse, we
          always welcome applications from qualified, experienced, passionate
          and loving candidates that are
          <br /> in search for a career in early childhood education.
        </p>
      </div>
      <div className="careers-benefits">
        <p className="two">We have incredible benefits that awaits you!</p>
        <div className="benefits-list">
          <ul>
            <li>
              <b>✓</b> Excellent conpensation
            </li>
            <li>
              <b>✓</b> Flexible hours
            </li>
            <li>
              <b>✓</b> Low student/teacher ratios
            </li>
            <li>
              <b>✓</b> Professional development
            </li>
            <li>
              <b>✓</b> Friendly and fun envirponment
            </li>
          </ul>
        </div>
        <img src="eplc2.jpg" alt="photo" />
      </div>
      <div className="four">
        <p className="four-header">Apply Now!!!</p>
        <p className="four-content">
          Interested, email us at <span>edenplayhouse.lc@gmail.com</span> or call <span> (043) 748 0543</span>
        </p>
      </div>
    </div>
  );
};

export default Careers;

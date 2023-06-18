import React from "react";
import "./AboutContent.css";

function AboutContent() {
  return (
    <>
      <div className="about">
        <img src="5.png" alt="About Photo" />
        <h1 className="about-text">
          We believe that children are born eager and ready to learn!
        </h1>
      </div>
      <div className="mission">
        <img src="mission.png" alt="mission photo" />
        <h1>Our Mission Vision</h1>
        <p>
          Eden Playhouse and Learning Center Inc. offers a quality education to
          be made avalilable <br />
          for every family to support parents to raise a god-fearing,
          well-rounded,
          <br /> disciplined, intelligent and talented children.
        </p>
      </div>
    </>
  );
}

export default AboutContent;

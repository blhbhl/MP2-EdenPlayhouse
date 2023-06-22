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
        <div className="mission-content">
          <h1>Our Mission Vision</h1>
          <p>
            Eden Playhouse and Learning Center Inc. offers a quality education
            to be made avalilable
            for every family to support parents to raise a god-fearing,
            well-rounded,
            disciplined, intelligent and talented children.
          </p>
        </div>
      </div>
      <div className="philo">
        <img src="philo.png" alt="philo photo" />
        <div className="philo-content">
          <h1>Philosophy</h1>
          <p>
            Eden Playhouse believes children are born eager and ready to learn! As educators, 
            it is our responsibility to foster that learning by providing children 
            with the opportunities that will allow them to create their own meanings 
            to the world around them. <br /> <br />
            We understand that it is not only important for 
            children to develop the basic skills that will be the foundation for future learning, 
            but they receive care from teachers who have a genuine love for children. <br />
            <br />
            Eden Playhouse strives 
            to provide exceptional care in a safe and nurturing environment, create an enriching 
            learning experience for each child and seek out the most 
            compassionate and qualified staff to care for your child.
          </p>
        </div>
      </div>

      <div className="about-banner">
        <h1>Ready to join a learning adventure?</h1>
        <p>If you are interested in learning more about our program or how to enroll, 
          please click on the button below to fill out our 
          questionnaire and we will get back to you as soon as possible!</p>
          
      </div>
    </>
  );
}

export default AboutContent;

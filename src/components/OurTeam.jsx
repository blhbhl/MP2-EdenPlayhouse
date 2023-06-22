import React from 'react';
import './OurTeam.css';

function OurTeam() {
  return (
    <>
      <div className="ourteam">
        <img src="our team.png" alt="our team" />
        <h1 className="content-text">Get to know our talented team!</h1>
      </div>

      <div className="container-fluid">
        <div className="component">
          <h1>Our Awesome Team</h1>
        </div>

        <div className="row-flex-container">
          <div className="card1">
            <img src="teachereden.png" alt="our team" />
            <h1 className="container-content-text">Eden S. Bahala</h1>
            <p className="container-content-text">Owner, School Head, Lead Teacher</p>
            <p className="container-content-text">Team member since 2005</p>
          </div>

          <div className="card2">
            <img src="teacherjenny.png" alt="our team" />
            <h1 className="container-content-text">Jenny Penero</h1>
            <p className="container-content-text">Teacher</p>
            <p className="container-content-text">Team member since 2017</p>
          </div>

          <div className="card3">
            <img src="teachergizelle.png" alt="our team" />
            <h1 className="container-content-text">Gizelle Smith</h1>
            <p className="container-content-text">Teacher</p>
            <p className="container-content-text">Team member since 2018</p>
          </div>
        </div>
      </div>

      <div className="banner-team">
          <div className="col1">
            <img src="teachersday.jpg" alt="our team" />
          </div>

          <div className="col2">
            <h1 className="container-content-text">"Spaces are limited! Secure your child's spot in our highly sought-after preschool program."</h1>
            <p className="container-content-text" >Discover the joy of learning through play! Don't miss out on the opportunity to lay a strong foundation for your child's future. Enroll now!</p>
          </div>
      </div>
    </>
  );
}

export default OurTeam;

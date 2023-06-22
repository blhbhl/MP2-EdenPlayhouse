import React from 'react'
import './Banner.css';

function Banner() {
    const handleButtonClick = () => {
  
      };

  return (<>
    <div className="banner">
    <img src="banner.png" alt="Banner Photo"/>
    <h1 className="banner-text">Your avenue for Learning and Fun</h1>
  </div>

 <div className="banner2">
    <h1>Eden playhouse provides exceptional care and education in a safe and nurturing environment for children 3 - 6 years old.</h1>
    <h3>If you are interested in learning more about our program or how to enroll, please click on the button below to fill out our questionnaire and we will get back to you as soon as possible!</h3>
    <a
          name="cta-button"
          id="ctaButton"
          className="btn btn-primary"
          href="#"
          role="button"
          onClick={handleButtonClick}
        >
          I am ready to join a learning adventure!
        </a>
  </div>

  <div className="banner3">
    <p>Enroll Now ! ! !</p>
    <h2>Program Offerings</h2>

    <a
          name="cta-button-Toddler"
          id="ctaButton-toddler"
          className="btn toddler"
          href="#"
          role="button"
          onClick={handleButtonClick}
        >
          Toddler - 1.6 to 2.5 years old
        </a>
    <a
          name="cta-button-nursery"
          id="ctaButton-nursery"
          className="btn nursery"
          href="#"
          role="button"
          onClick={handleButtonClick}
        >
          Nursery - 2.6 to 3.11 years old
        </a>

        <a
          name="cta-button-kinder"
          id="ctaButton-kinder"
          className="btn kinder"
          href="#"
          role="button"
          onClick={handleButtonClick}
        >
          Kindergarten - 4 to 4.11 years old
        </a>

        <a
          name="cta-button-prep"
          id="ctaButton-prep"
          className="btn prep"
          href="#"
          role="button"
          onClick={handleButtonClick}
        >
          Preparatory - 5 to 6 years old
        </a>
  </div>

  

  


  
</>
  )
}

export default Banner
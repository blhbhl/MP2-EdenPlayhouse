import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <h2>Eden Playhouse and Learning Center Inc.</h2>
          <p style={{ fontFamily: 'painted_brushregular', fontSize: '40px' }}>Your Avenue for Learning and Fun</p>
        </div>

        <div className="footer-content">
          <h2>Location</h2>
            <div className="location">
                <i className="fas fa-map-marker-alt"></i>
                <p>Diane St, Zone 1, Socorro<br />Oriental Mindoro, Philippines</p>
            </div>
        </div>

        <div className="footer-content">
          <h2>Contact</h2>
          <div>
            <input type="text" placeholder="Email Address" />
            <i className="fa fa-envelope"></i>
          </div>
          <p>edenplayhouse.lc@gmail.com<br />Phone: (043) 748 0543</p>
        </div>

        <div className="footer-content">
          <h2>Follow</h2>
          <p>Follow our news, updates and activities on:</p>
          <div>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>
      </div>

      <p>Copyright &copy; 2023 All Rights Reserved</p>
    </footer>
  );
}

export default Footer;

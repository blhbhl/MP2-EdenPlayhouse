import React from 'react'

const Footer = () => {
  return (
  <div>

<footer>
    <div className="footer-container">
        <div className="footer-content">
            <h2>Eden Playhouse and Learning Center Inc.</h2>
            <p style="font-family: 'painted_brushregular'; font-size: 40px;">Your Avenue for Leaning and  Fun</p>
        </div>

        <div className="footer-content">
            <h2>Location</h2>
            <div>
                <i className="fas fa-map-marker-alt"></i>
            </div>
            
            <p>Diane St, Zone 1, Socorro<br/ >Oriental Mindoro, Philippines</p>
        </div>

        
        <div className="footer-content">
            <h2>Contact</h2>
            <div>
                <input type="text" placeholder="Email Address">
                <i className="fa fa-envelope"></i>
            </div>
            <p>edenplayhouse.lc@gmail.com<br>Phone: (043) 748 0543</p>
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

</div>
  )
}

export default Footer


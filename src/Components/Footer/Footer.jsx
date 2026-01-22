import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div>

    <footer className="footer">
      <div className="footer-container">

        {/* LEFT SECTION */}
        <div className="footer-left">
          <img src="/logo.png" alt="Heels Dance Academy" className="footer-logo" />

          <p className="footer-desc">
            We, At HDA Take Full Pride And Joy In Embracing People From All
            Cultural Backgrounds And Educating Them In One Of Our Most
            Beautiful Heritage – DANCE !!
          </p>

          <div className="hours-follow">
            <div>
              <h4 className="footer-title red">Opening Hours:</h4>
              <p>Monday To Friday</p>
              <p>12:00 PM – 09:00 PM</p>

              <br />

              <p>Saturday & Sunday</p>
              <p>10:00 AM – 07:00 PM</p>
            </div>

            <div>
              <h4 className="footer-title red">Follow Us:</h4>
              <div className="social-icons">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-youtube"></i>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION */}
        <div className="footer-middle">
          <h3 className="footer-heading">QUICK LINKS !!</h3>
          <span className="underline"></span>

          <ul className="footer-links">
            <li>→ About Us</li>
            <li>→ Classes</li>
            <li>→ Package</li>
            <li>→ Schedule</li>
            <li>→ Contact Us</li>
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div className="footer-right">
          <h3 className="footer-heading">GET IN TOUCH !!</h3>
          <span className="underline"></span>

          <div className="contact-item">
            <span className="icon"></span>
            <p>
              Office No. 5, 1st Floor, A-Wing, Destination Centre,
              Magarpatta City, Hadapsar, Pune – 411028
            </p>
          </div>

          <div className="contact-item">
            <span className="icon"></span>
            <p>
              +91 8446158862 <br />
              +91 8446158860
            </p>
          </div>

          <div className="contact-item">
            <span className="icon"></span>
            <p>heelsdanceacademy@gmail.com</p>
          </div>
        </div>

      </div>
    </footer>


      
    </div>
  )
}

export default Footer;

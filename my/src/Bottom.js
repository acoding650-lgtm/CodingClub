import React from 'react';
import './Bottom.css';
import image from './photots/twitter.png';
import i2 from './photots/facebook.png';
import i3 from './photots/instagram.png';

function Bottom() {
  return (
    <footer className="footer-section">
      
      <div className="bottom-cta">
        <h2>Clipboard for iOS and Mac OS</h2>
        <p>
          Available for free on the App Store. Download for Mac or iOS, sync with iCloud and 
          you’re ready to start adding to your clipboard.
        </p>
        
        <div className="button-group">
          <a href="#" className="btn btn-ios">Download for iOS</a>
          <a href="#" className="btn btn-mac">Download for Mac</a>
        </div>
      </div>

      <div className="footer-bar-wrapper">

        <div className="footer-bar-content">
          
          
          <div className="footer-logo">
            <div className="mini-logo-circle">
              <span className="mini-logo-text">C</span>
            </div>
          </div>

          <div className="footer-links">
            <div className="links-col">
              <a href="#">FAQs</a>
              <a href="#">Contact Us</a>
            </div>
            <div className="links-col">
              <a href="#">Privacy Policy</a>
              <a href="#">Press Kit</a>
            </div>
            <div className="links-col">
              <a href="#">Install Guide</a>
            </div>
          </div>

    
          <div className="footer-socials">
            <a href="#" className="social-icon">
              <img src={image} />
            </a>
            <a href="#" className="social-icon">
              <img src={i2} />
            </a>
            <a href="#" className="social-icon">
              <img src={i3} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Bottom;//using footer here.
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faTelegram,faTiktok } from '@fortawesome/free-brands-svg-icons';
import imageicon from '../../assets/photo.png';
import './footer.styles.scss';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer">
        <div className="footer-content">
          <div className='image'>
            <img src={imageicon} alt="logo" />
          </div>
          
          <div>
            <p><i className="fa-solid fa-location-dot"></i> ኮልፌ ፤ አዲስ አበባ ፤ ኢትዮጵያ </p><br/>
           <p> <FontAwesomeIcon icon={faPhone } /> +2510914141414</p>
          </div>
          
          <div className="social-icons">
          <div style={{ display: "flex", gap: "10px" }}>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
              <div style={{ backgroundColor: "#FFFFFF", borderRadius: "50%", padding: "8px" }}>
                <FontAwesomeIcon icon={faTelegram} size="2x" color="#24A1DE" />
              </div>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <div style={{ backgroundColor: "#FFFFFF", borderRadius: "50%", padding: "8px" }}>
                <FontAwesomeIcon icon={faYoutube} size="2x" color="#FF0000" />
              </div>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
  <div style={{ backgroundColor: "#4267B2", borderRadius: "50%", padding: "8px" }}>
    <FontAwesomeIcon icon={faFacebookF} size="2x" color="white" />
  </div>
</a>

            <a href="https://Tiktok.com" target="_blank" rel="noopener noreferrer">
            <div style={{ backgroundColor: "#FFFFFF", borderRadius: "50%", padding: "8px" }}>
              <FontAwesomeIcon icon={faTiktok} size="2x" color="black"  />
              </div>
            </a>
</div>
            
           
            
          </div>
        </div>
        
        <div className="footer-info">
          <p>© 2017 Created by FitTec.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

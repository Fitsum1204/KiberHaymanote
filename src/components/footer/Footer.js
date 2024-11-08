import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faTelegram } from '@fortawesome/free-brands-svg-icons';
import imageicon from '../../assets/photo.png';
import './footer.styles.scss';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer">
        <div className="footer-content">
          <div className='image'>
            <img src={imageicon} alt="logo" />
          </div>
          
          <div>
            <p><i className="fa-solid fa-location-dot"></i> ኮልፌ ፤ አዲስ አበባ ፤ ኢትዮጵያ </p>
          </div>
          
          <div className="social-icons">
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTelegram} size="2x" color="#0088cc" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} size="2x" color="#FF0000" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
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

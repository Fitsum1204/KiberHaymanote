import React, { Fragment, useState, useEffect } from 'react';
import Myimage from '../../assets/photo.png';
import './header.styles.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Fragment>
      <div className={`nav-flex ${isScrolled ? 'scrolled' : ''}`}>
        <img src={Myimage} alt='KibereHaymanot' />
        <h2>እንኳን ወደ ደብረ ምጥማቅ ቅዱስ ፊልጶስ ክብረ ሃይማኖት ሰንበት ት/ቤት ድረ ገጽ በሰላም መጡ </h2>  
      </div>
    </Fragment>
  );
};

export default Header;

import React, { Fragment, useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';
import Header from '../../header/Header';

const Navigation = () => {
  const [showDropdown, setShowDropdown] = useState({
    
    item1: false,
    item2: false,
    item3: false,
  });

  // Toggle function for each dropdown
  const toggleDropdown = (item) => {
    setShowDropdown((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 25);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Fragment>
      <div className={`navigation ${scrolled ? 'scrolled1' : ''}`}>
        <div className='nav-group'>
        <Link to="/"><Header /></Link>
        <Link to="/" className="nav-link">ቀዳሚ ገጽ</Link>
        <Link  className="nav-link" onMouseEnter={() => toggleDropdown("item1")}
          onMouseLeave={() => toggleDropdown("item1")}>ስለ ሰንበት ት/ቤቱ
           {showDropdown.item1 && (
            <ul className="dropdown">
              <li><Link to='/about'>መሰረታዊ መረጃዎች</Link></li>
              <li><Link to='/about/structure'>መዋቅር</Link></li>
    
            </ul>
          )}
          </Link>
        
        <Link to="/news" className="nav-link" >ዜና ክብረ ሃይማኖት</Link>

        <div className="nav-link" onMouseEnter={() => toggleDropdown("item2")}
          onMouseLeave={() => toggleDropdown("item2")}>ሌሎች ገጾች
          {showDropdown.item2 && (
            <ul className="dropdown">
              
              <li><a  href='https://eotceth.org/' target="_blank">በኢ/ኦ/ተ/ቤ/ክ/መ/ፓ/የብጽዕ ወቅዱስ ልዩ ጽ/ቤት ደረ ገጽ</a></li>
              <li><a  href='https://eotc-aa.org//' target="_blank">በኢ/ኦ/ተ/ቤ/ክ/ የአዲስ አበባ ሀገረ ስብከት ደረ ገጽ</a></li>
              <li><a  href='https://eotc-gssu.org/' target="_blank">በኢ/ኦ/ተ/ቤ/ክ/ ሰንበት ት/ቤቶች ማደራጃ መምሪያ ድረ ገጽ</a></li>
              <li><a href="https://eotc-gssu.org/a/" target="_blank" >በኢ/ኦ/ተ/ቤ/ክ/ ሰንበት ት/ቤቶች ኅብረት</a></li>
              <li><a  href='https://eotcmk.org/a/'target="_blank">በኢ/ኦ/ተ/ቤ/ክ/ ሰንበት ት/ቤቶች ማደራጃ መምሪያ ማኅበረ ቅዱሳን</a></li>
            </ul>
          )}
          </div>

        <Link to="news" className="nav-link">ያግኙን</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

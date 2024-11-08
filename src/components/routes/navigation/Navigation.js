import React, { Fragment,useState,useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './navigation.styles.scss'
import Header from '../../header/Header'
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);  // Add the scrolled class when scroll position is greater than 50px
    } else {
      setScrolled(false); // Remove the class when the scroll is less than 50px
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up the event listener on component unmount
    };
  }, []);
  return (
    <Fragment>

    <div   className={`navigation ${scrolled ? 'scrolled1' : ''}`}>
      <Link to="/"><Header /></Link> 
     <Link to="/" className='nav-link'>ቀዳሚ ገጽ</Link>
	        <Link to="about" className='nav-link'>ስል ሰንበት ት/ቤቱ</Link>
	        <Link to="news" className='nav-link'>ዜና ክብረ ሃይማኖት</Link>
          <Link to="news" className='nav-link'>ክፍላት</Link>
          <Link to="news" className='nav-link'>ያግኙን</Link>
          <Link to="news" className='nav-link'>ሌሎች ገጾች</Link>
    
    </div>
    <Outlet />     
    </Fragment>
  )
}

export default Navigation

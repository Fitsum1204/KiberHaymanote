import React, { useState, useEffect, Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './oterPages.styles.scss';
import { AiOutlineMenu } from 'react-icons/ai'; // Icon for the menu toggle

const OtherPages = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false); // New state for sidebar

  
  

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Fragment>
      {/* Original Navigation */}
      <div className={`navigation  `}>
        <div className="nav-group">
          <Link className='nav-link'to="/">ቀዳሚ ገጽ</Link>
          <Link className='nav-link' to="/">ቀዳሚ </Link>
          <Link className='nav-link' to="/"> ገጽ</Link>
          <Link className='nav-link' to="/">ገጽ3</Link>
          {/* Other Links */}
        </div>
      </div>

      {/* Sidebar icon for small screens */}
      <AiOutlineMenu className="sidebar-icon" onClick={toggleSidebar} />

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="sidebar">
          <Link to="/news" className="nav-link" onClick={() => setSidebarOpen(false)}>ቀዳሚ ገጽ</Link>
          
          <Link className='nav-link' to="/">ቀዳሚ </Link>
          <Link className='nav-link' to="/"> ገጽ</Link>
          <Link className='nav-link' to="/">ገጽ3</Link>
        </div>
      )}

      <Outlet />
    </Fragment>
  );
};

export default OtherPages;




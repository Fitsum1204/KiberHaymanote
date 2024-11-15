import React, { useState, useEffect, Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './oterPages.styles.scss';
import { AiOutlineMenu ,AiOutlineClose} from 'react-icons/ai'; // Icon for the menu toggle

const OtherPages = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false); // New state for sidebar

  
  

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Fragment>
      {/* Original Navigation */}
      <div className={`navigatio  `}>
        <div className="nav-grou">
          <Link className='nav-lin'to="/">ቀዳሚ ገጽ</Link>
          <Link className='nav-lin' to="/">ቀዳሚ </Link>
          <Link className='nav-lin' to="/"> ገጽ</Link>
          <Link className='nav-lin' to="/">ገጽ3</Link>
          {/* Other Links */}
        </div>
      </div>

      {/* Sidebar icon for small screens */}
      <div onClick={toggleSidebar}>
      {sidebarOpen ? (
        <AiOutlineClose className="sidebar-icon" />
      ) : (
        <AiOutlineMenu className="sidebar-icon" />
      )}
    </div>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <Link to="/news" className="nav-lin" onClick={() => setSidebarOpen(false)}>ቀዳሚ ገጽ</Link>
        <Link className="nav-lin" to="/">ቀዳሚ</Link>
        <Link className="nav-lin" to="/">ገጽ</Link>
        <Link className="nav-lin" to="/">ገጽ3</Link>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default OtherPages;




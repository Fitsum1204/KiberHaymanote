import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const OtherPages = () => {
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
  return (
    <div>
      <nav className="navbar">
      <ul className="nav-list">
        {/* Nav Item 1 */}
        <li className="nav-item">home</li>
        <li
          className="nav-item"
          onMouseEnter={() => toggleDropdown("item1")}
          onMouseLeave={() => toggleDropdown("item1")}
        >
          Item 1
          {showDropdown.item1 && (
            <ul className="dropdown">
              <li><Link to='/news/it1'>Sub Item 1</Link></li>
              <li><Link>Sub Item 1</Link></li>
              <li><Link>Sub Item 1</Link></li>
            </ul>
          )}
        </li>

        {/* Nav Item 2 */}
        <li
          className="nav-item"
          onMouseEnter={() => toggleDropdown("item2")}
          onMouseLeave={() => toggleDropdown("item2")}
        >
          Item 2
          {showDropdown.item2 && (
            <ul className="dropdown">
              <li>Sub Item A</li>
              <li>Sub Item B</li>
            </ul>
          )}
        </li>

        {/* Nav Item 3 */}
        <li
          className="nav-item"
          onMouseEnter={() => toggleDropdown("item3")}
          onMouseLeave={() => toggleDropdown("item3")}
        >
          Item 3
          {showDropdown.item3 && (
            <ul className="dropdown">
              <li>Option X</li>
              <li>Option Y</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default OtherPages

// Navigation.js
import React, { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';

const Navigation = ({ links }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <div className="logo">
        <a href="/">Logo</a>
      </div>
      <div className="nav-links">
        {links.map((link, index) => (
          <a key={index} href={link.url}>
            {link.text}
          </a>
        ))}
      </div>
      <div className="hamburger-icon" onClick={toggleMenu}>
        &#9776;
      </div>
      <HamburgerMenu isOpen={isMenuOpen} onClose={closeMenu} links={links} />
    </nav>
  );
};

export default Navigation;

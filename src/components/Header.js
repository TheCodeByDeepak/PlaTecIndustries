import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../asserts/images/logo.jpg'; // Import your logo here


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header>
      <nav className="navbar">
        <div className="brand">
          <img src={logo} alt="Plytech Logo" className="logo-image" />
          <span className="logo-text">PlaTec Industries</span>
          
        </div>
       

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link
              to="/"
              onClick={handleLinkClick}
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              onClick={handleLinkClick}
              className={location.pathname === '/products' ? 'active' : ''}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={handleLinkClick}
              className={location.pathname === '/about' ? 'active' : ''}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <span className="close-btn">X</span>
          ) : (
            <>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

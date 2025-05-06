import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section company">
          <h2>Platec Industries</h2>
          <p>Leading manufacturer of PVC heat shrinkable lay flat tubing.</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
  <h3>Contact Us</h3>
  <p>
    Email: <a href="mailto:sales@platechindustries.com">sales@platechindustries.com</a>
  </p>
  <p>
    Phone: <a href="tel:+919324401905">+91 93244 01905</a>
  </p>
  <p>
  Location:  
  <a 
    href="https://www.google.com/maps/dir/?api=1&destination=204+Blue+Rose+Industrial+Estate,+Western+Express+Highway,+Above+Wason+Motors,+Next+to+Metro+Mall,+Borivali+East,+Mumbai+400066" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    204, Blue Rose Industrial Estate, Western Express Highway, Above Wason Motors, Next to Metro Mall, Borivali -East, Mumbai - 400066
  </a>
</p>


</div>


        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
  <a href="https://www.facebook.com/PlatecIndustries" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-facebook-f"></i>
  </a>
  <a href="https://www.linkedin.com/company/platec-industries" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin-in"></i>
  </a>
  <a href="https://www.instagram.com/platecindustries" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram"></i>
  </a>
</div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Platec Industries. All rights reserved.</p>
        <p>
          A project by <a href="https://www.quickinnovation.com" target="_blank" rel="noopener noreferrer">Quick Innovation</a>, 
          developed by <a href="https://github.com/TheCodeByDeepak" target="_blank" rel="noopener noreferrer">TheCodeByDeepak</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

// Header.jsx - Professional Premium Header for Apeksha Play School
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCallOptions, setShowCallOptions] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setShowCallOptions(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close call options when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.call-button-container')) {
        setShowCallOptions(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCallOptions = (e) => {
    e.stopPropagation();
    setShowCallOptions(!showCallOptions);
  };

  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
    setShowCallOptions(false);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/programs', label: 'Programs' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  const phoneNumbers = [
    { number: '+919876543210', label: 'Admissions', icon: '📞' },
    { number: '+919876543211', label: 'Office', icon: '🏢' },
    { number: '+919876543212', label: 'Emergency', icon: '🚑' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          <Link to="/" className="logo-link">
            <img
              src="/logo.png"
              alt="Apeksha Play School Logo"
              className="logo-image"
            />
            <div className="logo-text">
              <span className="logo-name">Apeksha</span>
              <span className="logo-subtitle">Play School</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <div key={link.path} className="nav-item">
              <Link 
                to={link.path} 
                className={`nav-link ${location.pathname === link.path || location.pathname.startsWith(link.path + '/') ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            </div>
          ))}
          
          {/* Call Button with Dropdown */}
          <div className="call-button-container">
            <button 
              onClick={toggleCallOptions} 
              className="call-btn"
              aria-label="Call us"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a1.999 1.999 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8 10a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>Call Us</span>
            </button>
            
            {showCallOptions && (
              <div className="call-dropdown">
                {phoneNumbers.map((phone, index) => (
                  <button
                    key={index}
                    className="call-option"
                    onClick={() => handleCall(phone.number)}
                  >
                    <span className="call-option-icon">{phone.icon}</span>
                    <div className="call-option-info">
                      <span className="call-option-label">{phone.label}</span>
                      <span className="call-option-number">{phone.number}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-header">
            <img src="/logo.png" alt="Logo" className="mobile-logo" />
            <button className="close-menu" onClick={toggleMenu}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <div key={link.path} className="mobile-nav-item">
                <Link 
                  to={link.path} 
                  className={`mobile-nav-link ${location.pathname === link.path || location.pathname.startsWith(link.path + '/') ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </div>
            ))}
            
            {/* Mobile Call Options */}
            <div className="mobile-call-section">
              <h4 className="mobile-call-title">📞 Call Us</h4>
              {phoneNumbers.map((phone, index) => (
                <button
                  key={index}
                  className="mobile-call-option"
                  onClick={() => {
                    handleCall(phone.number);
                    setIsMenuOpen(false);
                  }}
                >
                  <span className="mobile-call-icon">{phone.icon}</span>
                  <div className="mobile-call-info">
                    <span className="mobile-call-label">{phone.label}</span>
                    <span className="mobile-call-number">{phone.number}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="mobile-contact-info">
              <p>✉️ info@apekshaplayschool.com</p>
              <p>📍 New Delhi - 110016</p>
            </div>
          </div>
        </nav>

        {/* Hamburger Menu Button */}
        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

        {/* Overlay for mobile menu */}
        <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;
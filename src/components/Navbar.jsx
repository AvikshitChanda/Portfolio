import React, { useState, useEffect } from 'react';
import '../css/navbar.css';
import Logo from '../Assets/Images/LOGO.png';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [scrolling, setScrolling] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // State to control menu visibility

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setCurrentPage(sectionId);
      setShowMenu(false); 
    }
  };

  const reloadPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !scrolling) {
        setScrolling(true);
      } else if (window.scrollY === 0 && scrolling) {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolling]);

  return (
    <div className={`navbar ${currentPage !== 'home' || scrolling ? 'translucent-bg' : ''}`}>
      <img src={Logo} alt='logo' className="logo" onClick={reloadPage} />
      {/* Toggle menu button */}
      <div className="menu-toggle" onClick={() => setShowMenu(!showMenu)}>
        <FaBars className="menu-icon" />
      </div>  
      {/* Navigation links */}
      <div className={`navigations ${showMenu ? 'open' : ''}`}>
        <div className={`home ${currentPage === 'home' ? 'active' : ''}`} onClick={() => scrollToSection('home')}>Home</div>
        <div className={`about ${currentPage === 'about' ? 'active' : ''}`} onClick={() => scrollToSection('about')}>About</div>
        <div className={`project ${currentPage === 'project' ? 'active' : ''}`} onClick={() => scrollToSection('project')}>Projects</div>
        <div className={`skill ${currentPage === 'skills' ? 'active' : ''}`} onClick={() => scrollToSection('skills')}>Skills</div>
        <div className={`contact ${currentPage === 'contact' ? 'active' : ''}`} onClick={() => scrollToSection('contact')}>Contact</div>
      </div>
    </div>
  );
};

export default Navbar;

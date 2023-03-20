import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../style/Footer.css';

// Footer component that displays the links to the GitHub, LinkedIn, and Twitter accounts.
const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://github.com/shaynefw" target="_blank" rel="noopener noreferrer" className="footer-link">
        <FaGithub size={24} />
      </a>
      <a href="https://www.linkedin.com/in/shayne-whittle/" target="_blank" rel="noopener noreferrer" className="footer-link">
        <FaLinkedin size={24} />
      </a>
      <a href="https://twitter.com/ShayneWhayne" target="_blank" rel="noopener noreferrer" className="footer-link">
        <FaTwitter size={24} />
      </a>
    </footer>
  );
};

export default Footer;

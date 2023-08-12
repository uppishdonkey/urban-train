import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <a
          href="https://github.com/uppishdonkey"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-social-icon"
        ><FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-social-icon"
        ><FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

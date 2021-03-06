import React from 'react'
import Link from 'gatsby-link'

import logo from '../images/logo-white.png';

import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import youtube from '../images/youtube.png';
import twitter from '../images/twitter.png';

const Footer = ({ siteTitle }) => (
  <div className="footer">
    <div className="footer-top">
      <div className="footer-logo-new">
        <img src={logo} alt="logo" />
      </div>
      <div className="footer-nav">
        <Link to="/about" className="footer-nav-link">About Us</Link>
        <Link to="/" className="footer-nav-link">Films</Link>
        <Link to="/" className="footer-nav-link">Investor Corner</Link>
        <Link to="/" className="footer-nav-link">Services</Link>
        <Link to="/" className="footer-nav-link">Project Rules</Link>
        <Link to="/" className="footer-nav-link">Crowdfunding</Link>
        <Link to="/" className="footer-nav-link">Guide</Link>
        <Link to="/" className="footer-nav-link">FAQs</Link>
        <Link to="/" className="footer-nav-link">Our Team</Link>
        <Link to="/" className="footer-nav-link">Press</Link>
        <Link to="/" className="footer-nav-link">Terms of Use</Link>
        <Link to="/" className="footer-nav-link">Privacy Policy</Link>
        <Link to="/" className="footer-nav-link">Films</Link>
        <Link to="/" className="footer-nav-link">Music</Link>
        <Link to="/" className="footer-nav-link">Theatre</Link>
        <Link to="/" className="footer-nav-link">Comics</Link>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="footer-info">
        <div className="info">
          &copy;2012-2016 Wishberry. All Rights Reserved
        </div>
        <div className="divider"></div>
        <div className="info">
          +91 22 4942 6200
        </div>
        <div className="divider"></div>
        <div className="info">
          info@wishberry.in
        </div>
      </div>
      {/* <div className="footer-social"> */}
        <a className="footer-social-link">
          <img src={facebook} alt="facebook" />
        </a>
        <a className="footer-social-link">
          <img src={instagram} alt="facebook" />
        </a>
        <a className="footer-social-link">
          <img src={youtube} alt="facebook" />
        </a>
        <a className="footer-social-link">
          <img src={twitter} alt="facebook" />
        </a>
      {/* </div> */}
    </div>
  </div>
)

export default Footer

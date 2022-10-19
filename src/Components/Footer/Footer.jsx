import React from 'react';
import "./Footer.css";
import Github from "./../../assets/github.png";
import Instagram from "./../../assets/instagram.png";
import LinkedIn from "./../../assets/linkedin.png";
import Logo from "./../../assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer_container">
        <hr />
        <div className="footer">
            <div className="social_link">
                <img src={Github} alt="" />
                <img src={Instagram} alt="" />
                <img src={LinkedIn} alt="" />
            
            
            </div>
                <div className="logo_f" style={{textAlign:'center'}}>
                    <img src={Logo} alt="" />
                </div>
            
        </div>

        <div className="blur blur_f_1"></div>
        <div className="blur blur_f_2"></div>
      </div>
    </>
  );
};

export default Footer;

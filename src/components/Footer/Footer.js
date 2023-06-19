import React from "react";
import "./Footer.scss";
import Logo from "../../assets/logo.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer role="contentinfo" className="footer">
      <div className="content">
        <div className="company">
          <div className="logo">
            <img src={Logo} alt="JustEat" />
          </div>
          <div className="slogan">
            On formed merits hunted unable merely by mr whence or.
          </div>
        </div>
        <div className="section">
          <div className="section__head">Home</div>
          <div className="section__item">Company</div>
          <div className="section__item">News</div>
          <div className="section__item">Team</div>
        </div>
        <div className="section">
          <div className="section__head">About</div>
          <div className="section__item">History</div>
          <div className="section__item">Service</div>
          <div className="section__item">Pricing</div>
        </div>
        <div className="section">
          <div className="section__head">Partner</div>
          <div className="section__item">Business</div>
          <div className="section__item">Plan</div>
          <div className="section__item">Marketing</div>
        </div>
        <div className="section">
          <div className="section__head">Contact</div>
          <div className="section__item">JustEat</div>
          <div className="section__item">(000)000-0000</div>
          <div className="section__item">Poland</div>
        </div>
      </div>
      <div className="copyright">
        © Copyright {year} by JustEat. All right reserved.
      </div>
    </footer>
  );
};

export default Footer;

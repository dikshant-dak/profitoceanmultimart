import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import footer_logo from "../Assets/Logo PO.jpg";
// import footer_logo from '../Assets/logo_big.png'
// import instagram_icon from "../Assets/instagram_icon.png";
// import pintrest_icon from "../Assets/pintester_icon.png";
// import whatsapp_icon from "../Assets/whatsapp_icon.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Profit Ocean Multimart</p>
      </div>
      <ul className="footer-links">
        <Link to="/our-vision">
          <li>Our Vision</li>
        </Link>
        <Link to="/aboutus">
          <li>About</li>
        </Link>
        <Link to="/">
          <li>Products</li>
        </Link>
        <Link to="/terms-and-conditions">
          <li>Terms & Conditions</li>
        </Link>
        <Link to="/contact">
          <li>Contact Us</li>
        </Link>
      </ul>
      <div className="footer-social-icons">
        {/* <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={pintrest_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
        </div> */}
        <div
          className="footer-icons-container"
          onClick={() => window.open("https://facebook.com", "_blank")}
          style={{ color: "#1877f2" }}
        >
          <FaFacebookF size={30} />
        </div>
        <div
          className="footer-icons-container"
          onClick={() =>
            window.open("https://www.instagram.com/dikshant_dak/", "_blank")
          }
          style={{ color: "#E84C88" }}
        >
          <FaInstagram size={30} />
        </div>
        <div
          className="footer-icons-container"
          onClick={() => window.open("https://twitter.com", "_blank")}
          style={{ color: "#1DA1F2" }}
        >
          <FaTwitter size={30} />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

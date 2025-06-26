import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import footerlogo from "../assets/footer-logo.png"; 

export const Footer = () => {
  return (
    <footer className="bg-orange text-white py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Left: Navigation Links */}
          <div className="col-md-6">
            <div className="row text-start">
              <div className="col-4">
                <h6 className="fw-normal">PROJECTS UNDERTAKEN</h6>
                <ul className="list-unstyled small">
                  <li>– Residential Projects</li>
                  <li>– Commercial Projects</li>
                  <li>– Industrial Projects</li>
                  <li>– Civil Projects</li>
                </ul>
              </div>
              <div className="col-4">
                <h6 className="fw-normal">ABOUT US</h6>
                <ul className="list-unstyled small">
                  <li>– Services Offered</li>
                  <li>– Who We Are</li>
                  <li>– New & Media</li>
                  <li>– Contact Us</li>
                </ul>
              </div>
              <div className="col-4">
                <h6 className="fw-normal">TERMS AND USAGE</h6>
                <ul className="list-unstyled small">
                  <li>– Terms of Use</li>
                  <li>– Privacy Policy</li>
                  <li>– Disclaimer</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Center: Africa Logo */}
          <div className="col-md-3 text-start my-4 my-md-0">
            <img src={footerlogo} alt="Africa Icon" style={{ width: "100px" }} />
          </div>

          {/* Right: Socials & Copyright */}
          <div className="col-md-3 text-center text-md-end">
            <div className="mb-3">
              <FaFacebookF className="mx-2" />
              <FaTwitter className="mx-2" />
              <FaYoutube className="mx-2" />
              <FaInstagram className="mx-2" />
            </div>
            <div className="small">
              &copy; 2024. <span>Simba Developers</span>.<br />
              All Rights Reserved.
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};


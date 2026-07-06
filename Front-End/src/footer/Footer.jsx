import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top container">
        <div className="newsletter-block">
          <h3 className="newsletter-heading">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h3>
          <form
            className="newsletter-inputs"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              placeholder="Enter your email address"
              aria-label="Email address"
              type="email"
            />
            <button className="btn-sub">
              <FaPaperPlane /> Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="footer-main container">
        <div className="footer-brand">
          <h4>SHOP.CO</h4>
          <p>
            We have clothes that suits your style and which you're proud to
            wear. From women to men.
          </p>
          <div className="socials">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="social-btn"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-btn"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-btn"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:hello@shop.co"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="social-btn"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h5>COMPANY</h5>
            <ul>
              <li>About</li>
              <li>Features</li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
              <li>Career</li>
            </ul>
          </div>

          <div>
            <h5>HELP</h5>
            <ul>
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h5>FAQ</h5>
            <ul>
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>

          <div>
            <h5>RESOURCES</h5>
            <ul>
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <div>Shop.co © 2000-2026, All Rights Reserved</div>
        <div className="payments">
          <img src="/img/Visa.png" alt="Visa" />
          <img src="/img/Mastercard.png" alt="Mastercard" />
          <img src="/img/Paypal.png" alt="PayPal" />
          <img src="/img/Apple-Pay.png" alt="Apple Pay" />
          <img src="/img/G-Pay.png" alt="G Pay" />
        </div>
      </div>
    </footer>
  );
}

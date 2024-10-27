import React from "react";
import "./Footer.css"


const Footer = () => {
  return (
   <footer className="footer">
    <div className="footer-content">
        <h2>PERFUMEmania</h2>
        <div className="footer-lists">
            <ul className="footer-list">
                <li>Customer Service</li>
                <li>Contact Us</li>
                <li>Shipping & Returns</li>
                <li>FAQ</li>
            </ul>
            <ul className="footer-list">
                <li>Shop</li>
                <li>All Perfumes</li>
                <li>New Arrivals</li>
                <li>Best Sellers</li>
            </ul>
            <ul className="footer-list">
                <li><i className="fa-brands fa-facebook media-icon"></i>Facebook</li>
                <li><i className="fa-brands fa-instagram media-icon"></i>Instagram</li>
                <li><i className="fa-brands fa-x-twitter media-icon"></i>Twitter</li>
                <li><i className="fa-brands fa-tiktok media-icon"></i>Tiktok</li>
            </ul>
        </div>
    </div>
</footer>
  )
}

export default Footer;

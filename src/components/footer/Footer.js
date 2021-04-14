import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <ul className="footer-items">
                    <li className="item">JS</li>
                    <li className="item">Python</li>
                    <li className="item">NodeJs</li>
                </ul>
                <li id="logo-footer" className="logo">
                    Makers Documentation
                </li>
            </div>
        </div>
    );
};

export default Footer;

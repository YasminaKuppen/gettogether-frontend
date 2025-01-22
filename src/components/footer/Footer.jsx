import React from 'react';
import './Footer.css'
import {NavLink, Route} from "react-router-dom";


function Footer() {
    return (
        <nav>
            <div className="footer-container">
                <li><NavLink to="/contact"
                >Contact</NavLink>
                </li>
            </div>
        </nav>
    );
}

export default Footer;
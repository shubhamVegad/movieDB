import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    MovieDB is the world's most comprehensive source of information on movies, TV shows, and celebrities. Our database contains over 6 million titles and 10 million personalities, making it the ultimate destination for movie and TV enthusiasts. Whether you're looking for the latest news, reviews, trailers, or showtimes, MovieDB has you covered. Join our community of users to rate and review your favorite titles, or discover new ones based on your interests. Thanks for visiting MovieDB! <br />
                    <br />
                    All rights reserved © MovieDB 2023, CheckOut our privacy policy.
                </div>
                <div className="socialIcons">
                    <a href="https://www.facebook.com/profile.php?id=100013641766089" target="_blank " className="icon">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.instagram.com/shubham_vegad_/" target="_blank" className="icon">
                        <FaInstagram />
                    </a>
                    <a href="https://twitter.com/VegadShubham" target="_blank" className="icon">
                        <FaTwitter />
                    </a>
                    <a href="https://www.linkedin.com/in/shubham-vegad-9a2054212/" target="_blank" className="icon">
                        <FaLinkedin />
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
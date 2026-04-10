import React from "react";

/**
 * Footer Component
 * Clean and reusable footer with dynamic year
 */

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/devrajsinh-solanki-514861335/",
    icon: "fab fa-linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/",
    icon: "fab fa-github",
  },
  {
    name: "Twitter",
    url: "#",
    icon: "fab fa-twitter",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h3>Devraj Solanki</h3>
                    <p>Building the future, one line of code at a time.</p>
                </div>
                
                <div className="social-links">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label={social.name}
                        >
                            <i className={social.icon}></i>
                        </a>
                    ))}
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {year} Devraj Solanki | All Rights Reserved</p>
                <p className="footer-tagline">Crafted with ❤️ and React.js</p>
            </div>
        </footer>
    );
};

export default Footer;

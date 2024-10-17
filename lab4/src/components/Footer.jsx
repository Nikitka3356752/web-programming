import React from "react";
import footerData from "../mockData/footerData";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="cta-footer">
        <h2 className="cta-title">{footerData.ctaTitle}</h2>
        <button className="cta-button">{footerData.ctaButton}</button>
      </div>

      <div className="footer-grid">
        {footerData.columns.map((column, index) => (
          <div key={index} className="footer-column">
            <h3>{column.title}</h3>
            {column.links ? (
              <ul>
                {column.links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href}>{link.text}</a>
                  </li>
                ))}
              </ul>
            ) : (
              column.content.map((item, idx) => <p key={idx}>{item.text}</p>)
            )}
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <p>{footerData.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;

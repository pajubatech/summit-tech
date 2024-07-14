import React from "react";
import "../styles/footer.css";

const Footer = () => {
    return (
      <div className="footer-wrapper">
        <div className="footer-section-one">
          <div className="footer-logo-container"></div>
          <div className="footer-icons">
          </div>
        </div>
        <div className="footer-section-two">
          <div className="footer-section-columns">
            <span></span>
            <span>Ajuda</span>
            <span>Compartilhe</span>
            <span>Denuncie</span>
            <span>Depoimentos</span>
            <span></span>
          </div>
          <div className="footer-section-columns">
            <span>contatoA.se@gmail.com</span>
             <span>Termos & Condições</span>
            <span>Politica de Privacidade</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
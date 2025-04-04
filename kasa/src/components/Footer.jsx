// Footer.jsx
import React from "react";
import footerImg from "/footerLogo.png";
import "./footer.css";
import mentionsFooter from "/© 2020 Kasa. All rights reserved.png";
function Footer() {
      return (
            <>
                  <footer className="footer">
                        <img
                              src={footerImg}
                              className="logoFooter"
                              alt="kasa logo footer"
                        />
                        <br></br>
                        <img
                              src={mentionsFooter}
                              className="mentionsFooter"
                              alt="kasa Mentions footer"
                        />
                  </footer>
            </>
      );
}

export default Footer;

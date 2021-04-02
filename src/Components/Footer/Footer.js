import React from 'react'
import './Footer.css'


const Footer = () => (
    <div className="footer">
                <ul className="icon-bar">
                    <a href="https://www.instagram.com/browsjungle/"target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                    </a> {}
                    <a href="https://g.page/brows-jungle?share" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-google"></i>
                    </a>
                 {}
                    <a href="https://github.com/Juzva8/enoughrandom" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                    </a>
                </ul>
   <a href="https://browsjungle.com/" target="_blank" className="copyright"rel="noopener noreferrer">COPYRIGHT © 2020 BROWS JUNGLE, LLC - ALL RIGHTS RESERVED.</a>
   {}
   <a href="https://www.legitenough.com/"target="_blank"  className="POWERED" rel="noopener noreferrer">POWERED BY LEGITENOUGH.COM</a>
  
    </div>
  );

export default Footer

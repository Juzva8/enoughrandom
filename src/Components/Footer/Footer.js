import React from 'react'
import './Footer.css'


const Footer = () => (
    <div className="footer">
                <ul className="icon-bar">
                    <a href="https://www.instagram.com/browsjungle/"target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram fa-lg" ></i>
                    </a> {}
                    <a href="https://g.page/brows-jungle?share" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-google fa-lg"></i>
                    </a>
                 {}
                    <a href="https://www.facebook.com/brows.jungle" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook fa-lg"></i>
                    </a>
                </ul>
   <a href="https://browsjungle.com/" target="_blank" className="copyright"rel="noopener noreferrer">COPYRIGHT © 2020 BROWS JUNGLE, LLC - CORONA, CA</a>
   {}
   <a href="https://strattonterrace.com/"target="_blank"  className="POWERED" rel="noopener noreferrer">POWERED BY STRATTONTERRACE.COM</a>
  
    </div>
  );

export default Footer

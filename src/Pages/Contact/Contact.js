import React from 'react'
import './Contact.css'
import emailjs from "emailjs-com";

export default function Contact() {

    function sendEmail(e) {
      e.preventDefault();

      emailjs.sendForm('Browsjungle', 'template_fv1y4ct', e.target, 'user_CTfSaUyLCF3sUFtRUIZTC')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }
    return (
        <div className="contact">
            <form className="contact__form" onSubmit={sendEmail}>
            <h1>Contact Us</h1>
            <label> Name </label>
            <input 
            placeholder ="Name" 
            />
            <label> Email </label>
            <input 
            placeholder ="Email" 
            />
              <label> Subject </label>
            <input 
            placeholder ="Subject" 
            />
            <label>Message</label>
            <textarea
            placeholder="Message"
            >
            </textarea>
            <button
        type="submit" >
        - SEND -
      </button>
            </form>
            <h2>Brows Jungle, LLC</h2>
            <p>Email: browsjungle@yahoo.com</p>
            <p>Mob.: ‪(747) 224-7451‬</p>
      
        </div>
)
    }

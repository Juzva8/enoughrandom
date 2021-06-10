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
            <input type="text" className="form-control" placeholder="Name" name="name"/>
            <label> Email </label>
            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
              <label> Subject </label>
              <input type="text" className="form-control" placeholder="Subject" name="subject"/>
            <label>Message</label>
            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
            <button
        type="submit" >
        - SEND -
      </button>
            </form>
            <h2>Brows Jungle, LLC</h2>
            <p id="contact__id">Email: browsjungle@yahoo.com</p>
            <p id="contact__id">Mob.: ‪(747) 224-7451‬</p>
      
        </div>
)
    }

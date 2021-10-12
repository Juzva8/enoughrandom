import React from 'react'
import './Contact.css'
import { InlineWidget } from "react-calendly";
// import emailjs from "emailjs-com"

export default function Contact() {

    // function sendEmail(e) {
    //   e.preventDefault();

    //   emailjs.sendForm('Browsjungle', 'template_fv1y4ct', e.target, 'user_CTfSaUyLCF3sUFtRUIZTC')
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    //     e.target.reset();
    // }
    return (
        <div className="contact">
          <>
          <InlineWidget url="https://calendly.com/browsjungle/5hours?month=2021-10&date=2021-10-15" />
          </>

            <h2>Brows Jungle, LLC</h2>
            <p id="contact__id">Email: browsjungle@gmail.com</p>
            <p id="contact__id">Mob.: ‪(747) 224-7451‬ </p>
            <p id="contact__id">Lake Elsinore, CA</p>
      
        </div>
)
    }

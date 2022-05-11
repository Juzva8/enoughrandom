import React from 'react'
import './Contact.css'
import { InlineWidget } from "react-calendly";

export default function Contact() {

 
    return (
        <div className="contact">
          <>
          <InlineWidget url="https://calendly.com/browsjungle/4-5hours" />
          </>

            <h2>PMU Corona</h2>
            <p id="contact__id">Email: browsjungle@gmail.com</p>
            <p id="contact__id">Mob.: ‪(747) 224-7451‬ </p>
            <p id="contact__id">Corona, CA</p>
      
        </div>
)
    }

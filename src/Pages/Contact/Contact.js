import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className="contact">
            <form className="contact__form">
            <h1>Contact Us</h1>
            <label> Name </label>
            <input placeholder ="name" />
            <label> Email </label>
            <input placeholder ="Email" />
            <label>Message</label>
            <textarea
            placeholder="Message">
            </textarea>
            <button
        type="submit">
        Submit
      </button>
            </form>
      
        </div>
    )
}

export default Contact

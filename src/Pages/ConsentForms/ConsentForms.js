import React from 'react';
import { Button } from 'reactstrap';
import './ConsentForms.css'


function ConsentForms() {

    return (
        <div className="ConsentForms">
            
            <h1 className="ConsentForms__h1">TO CONFIRM BOOKING PLEASE</h1>
            <span className="ConsentForm__span">SUBMIT A $50 NON-REFUNDABLE BOOKING FEE TO RESERVE YOUR APPOINTMENT. THIS FEE WILL GO TOWARDS YOUR BROWS PRICING. PLEASE SEND IT USING ZELLE AT BROWSJUNGLE@GMAIL.COM IF PAYMENT IS NOT RECEIVED WITHIN 1 HOUR BOOKING WILL BE CANCELLED. </span>
            
            <h1 className="ConsentForms__h1">AND READ CONSENT FORMS BELLOW</h1>
            
        <div className="ConsentForms__button">
        <Button href="https://drive.google.com/file/d/1RW4r2GbMt_JhiMOxRWyYrtDbtwV5NXaU/view?usp=sharing" target="_blank" size="lg" block>Before The Procedure (pdf)</Button>
        <Button href="https://drive.google.com/file/d/1eECmuyZrXa3eW8dCzDBoe9eGe7InzWoz/view?usp=sharing" target="_blank"  size="lg" block>After The Procedure (pdf)</Button>
        <Button href="https://drive.google.com/file/d/1Xqg050NpUSvxYhWbKowG9AmBUJ-eO9DG/view?usp=sharing" target="_blank" size="lg" block>Main Consent Form (pdf)</Button>
        <Button href="https://drive.google.com/file/d/1tOA445KrYShPKz8GJ9DpkygeYhV-HdFb/view?usp=sharing" target="_blank" size="lg" block>Medical Consent and Procedure Chart (pdf)</Button>
        <Button href="https://drive.google.com/file/d/1NY6iY-8O-LtsAZUEv9JT-yNiUND15wl-/view?usp=sharing" target="_blank" size="lg" block>Photo and Liability Release Form (pdf)</Button>
        <Button href="https://drive.google.com/file/d/1TX0kDJw5yTCrm5zjNkyKx02K3hbVugPB/view?usp=sharing" target="_blank" size="lg" block>Procedure Report (pdf)</Button>
        </div>
            </div>
    )
}

export default ConsentForms

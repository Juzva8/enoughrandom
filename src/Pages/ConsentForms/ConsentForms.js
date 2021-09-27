import React from 'react';
import { Button } from 'reactstrap';
import './ConsentForms.css'


function ConsentForms() {

    return (
        <div className="ConsentForms">
            
            <h1 className="ConsentForms__h1">TO CONFIRM BOOKING PLEASE</h1>
            <span className="ConsentForm__span">SUBMIT A $50 NON-REFUNDABLE BOOKING FEE TO RESERVE YOUR APPOINTMENT. THIS FEE WILL GO TOWARDS YOUR BROWS PRICING.<br/> PLEASE SEND IT USING <strong>ZELLE AT BROWSJUNGLE@GMAIL.COM</strong> IF PAYMENT IS NOT RECEIVED WITHIN 1 HOUR BOOKING WILL BE CANCELLED. </span>
            
            <h1 className="ConsentForms__h1">AND READ CONSENT FORMS BELLOW</h1>
            
        <div className="ConsentForms__button">
        <Button href="https://drive.google.com/file/d/1PCWapELgGw6y9ZW7CJ5Egq-5OXbtRuGV/view?usp=sharing" target="_blank" size="lg" block>Before The Procedure BROWS (pdf)</Button>
        <Button href="https://drive.google.com/file/d/1YyXYIGB8Gj8W93LorYz2U_iUWPjWe-PK/view?usp=sharing" target="_blank"  size="lg" block>After The Procedure BROWS (pdf)</Button>
        <Button href="https://drive.google.com/file/d/1KWMuoN9QNdrOjV9QYik_ZSYMZHjWhuha/view?usp=sharing" target="_blank" size="lg" block>Before The Procedure LIPS (pdf)</Button>
        <Button href="https://drive.google.com/file/d/14D0Ew3CIESUeUnbaINS6scU3KIh9at-F/view?usp=sharing" target="_blank"  size="lg" block>After The Procedure LIPS (pdf)</Button>
        <Button href="https://drive.google.com/file/d/1W1e-_ym4Mx2L0ssPBPuwYiJ96S9eXSyH/view?usp=sharing" target="_blank" size="lg" block>Main Consent Form (pdf)</Button>
        <Button href="https://drive.google.com/file/d/1zakpDsnXHZea6ff756unhtNfN9_gqFgC/view?usp=sharing" target="_blank" size="lg" block>Medical Consent and Procedure Chart (pdf)</Button>
        <Button href="https://drive.google.com/file/d/1WJ-F8_RmXtsWZUT6AdklEnjIo1xBcyai/view?usp=sharing" target="_blank" size="lg" block>Photo and Liability Release Form (pdf)</Button>
        <Button href="https://drive.google.com/file/d/1zlDWps3F8cAqVegLOA_-DhpVQEZ_FkFe/view?usp=sharing" target="_blank" size="lg" block>Procedure Report (pdf)</Button>
        </div>
            </div>
    )
}

export default ConsentForms

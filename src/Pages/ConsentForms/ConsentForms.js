import React from 'react';
import { Button } from 'reactstrap';
import './ConsentForms.css'
// import after from '../ConsentForms/After_The_Procedure.pdf'



  


function ConsentForms() {

    return (
        <div className="ConsentForms">
            <h1>CONSENT FORMS</h1>
            
        <div className="ConsentForms__button">
        <Button size="lg" block>Before The Procedure (pdf)</Button>
        <Button size="lg" block>After The Procedure (pdf)</Button>
        <Button size="lg" block>Main Consent Form (pdf)</Button>
        <Button size="lg" block>Medical Consent and Procedure Chart (pdf)</Button>
        <Button size="lg" block>Photo and Liability Release Form (pdf)</Button>
        <Button size="lg" block>Procedure Report (pdf)</Button>
        </div>
            </div>
    )
}

export default ConsentForms

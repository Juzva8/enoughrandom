import React from 'react'
import './candidate.css'
import doctor from '../../Assets/doctor.png';
import skinType from '../../Assets/skinType.png';

function candidate() {
    return (
        <div className="candidate">
    <h1>AM I A GOOD CANDIDATE FOR PERMANENT MAKEUP?</h1>
    <div className="row">
   
  
    <div className="row">
      
        <div className="col-12 col-lg-6 pl-lg-0 pr-lg-6">
        <div className="col-12 col-lg-12 pl-lg-0 pr-lg-6">
    <h4>WHAT IS YOUR SKIN TYPE?</h4>
   </div>
        <img src={doctor} alt="skinType" className="img-fluid-candidate mb-xl-6"/>
        <h5>MICROBLADING</h5>
      <h6 id="h6_text" >The best candidates for getting microbladed eyebrows are people who already have their own eyebrows but want to add some shape, color or density.</h6>
      <h6 id="h6_text2">   *NOT recommended for oily, or mature skin.</h6>
      <h5>POWDER BROWS</h5>
        <h6 id="h6_text">Powder brows can be done as light as a brow tint or as dark as glam. Recommended for those who want a completely "filled in" brow!</h6>
        <h6 id="h6_text2">   *Best for ALL skin types.</h6>
          </div>
          <div className="col-12 col-lg-6 pl-lg-0 pr-lg-6">
          <div className="col-12 col-lg-12 pl-lg-0 pr-lg-6">
    <h4>WE CAN'T DO PMU FOR ANY CLIENTS WHO ARE OR HAVE:</h4>
   </div>
          <img src={skinType} alt="doctor" className="img-fluid-candidate mb-xl-6"/>
          <ul>
      <li >COVID-19 vaccines. We cannot tattoo between the 1st and the 2nd dose of the vaccine and you need to wait 14 days after the 2nd shot.</li>
      <li>Skin irritations or Psoriasis near the treated area (rashes, sunburn, acne, etc.)</li>
      <li>A Pacemaker or major heart problems</li>
      <li>Allergic to anesthetic (Lidocaine)</li>
      <li>Viral infections and/or diseases</li>
      <li>Sick (cold, flu, COVID-19, etc.)</li>
      <li>Had Botox in the past 3 months</li>
      <li>Used Accutane in the past year</li>
      <li>Tendency towards keloids</li>
      <li>Had an Organ transplant</li>
      <li>Seborrheic dermatitis</li>
      <li>Pregnant or Nursing</li>
      <li>Diabetic</li>
      <li>Epilepsy</li>
           </ul>
          </div>
          </div>
        </div>
        </div>
    )
}

export default candidate

import React from 'react'
import './LipBlush.css'
import preCare from '../../Assets/pre-care.jpg';
import doctor from '../../Assets/doctor.png';
import skinType from '../../Assets/skinType.png';
import aftercare from '../../Assets/post-care.jpg';

const styles = {

  preCare: {
      boxShadow: "5px 5px 20px -5px black",
      borderRadius: "25px"
  },
  LipBlush: {
    boxShadow: "5px 5px 20px -5px black",
      borderRadius: "25px"
},
};
function Lipblush() {
  return (
    <div className="PmuBrows">
<h1>AM I A GOOD CANDIDATE FOR PERMANENT MAKEUP?</h1>
<div className="row">


<div className="row">
  
    <div className="col-12 col-lg-6 pl-lg-0 pr-lg-6">
    <div className="col-12 col-lg-12 pl-lg-0 pr-lg-6">
<h4>WHAT IS YOUR SKIN TYPE?</h4>
</div>
    <img src={doctor} alt="skinType" className="img-fluid-PmuBrows mb-xl-6"/>
    <h6>MICROBLADING</h6>
  <h6 id="h6_text" >The best PmuBrows for getting microbladed eyebrows are people who already have their own eyebrows but want to add some shape, color or density.</h6>
  <h6 id="h6_text2">   *NOT recommended for oily, or mature skin.</h6>
  <h6>POWDER BROWS</h6>
    <h6 id="h6_text">Powder brows can be done as light as a brow tint or as dark as glam. Recommended for those who want a completely "filled in" brow!</h6>
    <h6 id="h6_text2">   *Best for ALL skin types.</h6>
      </div>
      <div className="col-12 col-lg-6 pl-lg-0 pr-lg-6">
      <div className="col-12 col-lg-12 pl-lg-0 pr-lg-6">
<h4>WE CAN'T DO PMU FOR ANY CLIENTS WHO ARE OR HAVE:</h4>
</div>
      <img src={skinType} alt="doctor" className="img-fluid-PmuBrows mb-xl-6"/>
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
    <h1 className="aftercare__h1"> Pre and After Care</h1>
  <div className="row">
    <div className="col-12 col-lg-7 pl-lg-0 pr-lg-5">
      <h4>BEFORE THE PROCEDURE</h4>
      <h4>Things You Should Avoid for at least 24 hours - BEFORE THE PROCEDURE</h4>
      <h6 className="aftercare__h6" >Alcohol, caffeine, Ibuprofen/Advil, Aspirin, Vitamin E, “Hair, Skin, Nail” supplements, and fish oil supplements.</h6>
      <h4>1 week - BEFORE THE PROCEDURE</h4>
      <h6 className="aftercare__h6" >Avoid sun and tanning also brow waxing, tinting, or threading.</h6>
      <h4 >Stop using 2 weeks - BEFORE THE PROCEDURE</h4>
      <h6 className="aftercare__h6">Alpha Hydroxy Acid (AHA) products close to the eyebrow area</h6>
      <h4>Stop using at least 1 month - BEFORE THE PROCEDURE</h4>
      <h6 className="aftercare__h6">Retinol or vitamin A products,  chemical Peels, Microdermabrasion and facials.</h6>
      <h4>Should be avoided for 3 months - BEFORE THE PROCEDURE</h4>
      <h6 className="aftercare__h6">Botox and filler on the forehead, temple, and eye area.</h6>
    </div>
    <div className="col-12 ml-md-5 ml-lg-0 pl-md-5 pl-lg-0 col-lg-5 mt-lg-5 mt-xl-3 pt-lg-5 pt-xl-0 pr-lg-0">
        <img src={preCare} alt="preCare" className="img-fluid mb-xl-5" style={styles.preCare} />
    </div>
  </div>  
  <div className="row">
    <div className="col-12 col-lg-7 pl-lg-0 pr-lg-5">
    <h4 >AFTER THE PROCEDURE</h4>
    <img src={aftercare} alt="preCare" className="img-fluid mb-xl-5" style={styles.aftercare} />
    </div>
    <div className="col-12 ml-md-5 ml-lg-0 pl-md-5 pl-lg-0 col-lg-5 mt-lg-5 mt-xl-3 pt-lg-5 pt-xl-0 pr-lg-0">
      <h4 > Day 1 – 2</h4>
      <h6 className="aftercare__h6">Use a clean tissue every few hours to pick up the clear fluid that is coming out. This will help reduce scabbing. The fluid forms the scabs.</h6>
      <h4 >Day 1 – 10</h4>
      <h6 className="aftercare__h6" >Starting on the night of your procedure, wash your brows every morning and evening with antibacterial soap with your pointer finger in a circular motion. 
        Lightly rinse off with your fingers. Dab dry and do not rub! 
        Avoid use of abrasive washcloths or sponges. Allow eyebrows to completely dry before applying ointment. Apply the aftercare ointment with 
        freshly washed hands or a Q-Tip. Only a thin layer.</h6>
      <h4 >REMEMBER!</h4>
      <h6 className="aftercare__h6">DO NOT rub, pick or scratch the treated area. Let any scabbing or dry skin naturally exfoliate off. Picking can cause scarring and pigment loss!</h6>
    </div>
  </div>  
    </div>
)
}


export default Lipblush

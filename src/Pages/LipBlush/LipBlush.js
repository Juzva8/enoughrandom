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
<h1>AM I A GOOD CANDIDATE FOR LIP BLUSH?</h1>
<div className="row">


<div className="row">
  
    <div className="col-12 col-lg-6 pl-lg-0 pr-lg-6">
    <div className="col-12 col-lg-12 pl-lg-0 pr-lg-6">
<h4>WHAT IS YOUR SKIN TYPE?</h4>
</div>
    <img src={doctor} alt="skinType" className="img-fluid-PmuBrows mb-xl-6"/>
    <h6><strong>LIP BLUSH</strong></h6>
  <h6 id="h6_text" >Lip Blush tattoo enhances the natural shape of your lips, giving them that boost of vitality and even coloring. 
  This is an extremely popular semi-permanent makeup treatment providing a flush of color as well as defining the contours of the lip. 
  The result will resemble a very subtle, matte, natural toned lipstick look. Most lip blush tattoos are designed to last <strong>2 to 3 years.</strong>
  Touch up (if needed) can be done no sooner than 6-8 weeks after the initial appointment. </h6><br></br>
  <h6 id="h6_text2">   *If you are looking for a solid lipstick look, this procedure is not for you. 
**Lip Blush should only be done in the natural line of the lips. The skin contains pores and hair, and a completely different texture which would end in uneven healing of the pigment. 
*** Please disclose if you have ever had a lip blister, cold sore or any herpes outbreaks. This technique will cause a blister to form. You may request a prescription from your doctor for Valtrex to prevent and outbreaks.
**** Your lips may swell 2 or 3 times the normal lip size. This is NORMAL. When you go home ice your lips and the swelling will go down in 1 to 3 days.
</h6>

      </div>
      <div className="col-12 col-lg-6 pl-lg-0 pr-lg-6">
      <div className="col-12 col-lg-12 pl-lg-0 pr-lg-6">
<h4>WE CAN'T DO LIP BLUSH FOR ANY CLIENTS WHO ARE OR HAVE:</h4>
</div>
      <img src={skinType} alt="doctor" className="img-fluid-PmuBrows mb-xl-6"/>
      <ul>
  <li >History of cold sores. If you are prone to cold sores, lip blushing may result in an outbreak and cause loss of pigment. You must start taking antiviral medication, prescribed by your doctor and NOT over the counter, 48 hours prior to treatment to prevent an outbreak.</li>
  <li >Individuals with a dark lip or prone to hyperpigmentation. In some cases, we cannot work over dark lips or people prone to hyperpigmentation. Due to the hyper pigmentation getting darker. *Additional consultation needed!</li>
  <li >COVID-19 vaccines. We cannot tattoo between the 1st and the 2nd dose of the vaccine, and you need to wait 14 days after the 2nd shot.</li>
  <li>Skin irritations or Psoriasis near the treated area (rashes, sunburn, acne, etc.)</li>
  <li>Uncontrolled high blood pressure or mitral valve disorder</li>
  <li>Transmittable blood conditions like HIV or Hepatitis </li>
  <li>Allergic to anesthetic (Lidocaine), makeup, colors</li>
  <li>Used Accutane or steroids in the past year</li>
  <li>A Pacemaker or major heart problems</li>
  <li>Viral infections and/or diseases</li>
  <li>Sick (cold, flu, COVID-19, etc.)</li>
  <li>Used Accutane in the past year</li>
  <li>Had Botox in the past 4 weeks</li>
  <li>Tendency towards keloids</li>
  <li>Had an Organ transplant</li>
  <li>Seborrheic dermatitis</li>
  <li>Under 18 years of age</li>
  <li>Pregnant or Nursing</li>
  <li>Active skin cancer</li>
  <li>Healing disorders </li>
  <li>Blood thinners </li>
  <li>Hemophiliac</li>
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

import React from 'react'
import './postcare.css'

import preCare from '../../Assets/pre-care.jpg';
import postCare from '../../Assets/post-care.jpg';

const styles = {

  preCare: {
      boxShadow: "5px 5px 20px -5px black",
      borderRadius: "25px"
  },
  postCare: {
    boxShadow: "5px 5px 20px -5px black",
      borderRadius: "25px"
},
};
function postcare() {
    return (
      <div className="postcare">
        <h1 className="postcare__h1"> Pre and Post Care</h1>
      <div className="row">
        <div className="col-12 col-lg-7 pl-lg-0 pr-lg-5">
          <h3 className="postcare__h3">BEFORE THE PROCEDURE</h3>
          <h4 className="postcare__h4"><strong>Things You Should Avoid for at least 24 hours - BEFORE THE PROCEDURE</strong></h4>
          <h5 className="postcare__h5" >Alcohol, caffeine, Ibuprofen/Advil, Aspirin, Vitamin E, “Hair, Skin, Nail” supplements, and fish oil supplements.</h5>
          <h4 className="postcare__h4">1 week - BEFORE THE PROCEDURE</h4>
          <h5 className="postcare__h5" >Avoid sun and tanning also brow waxing, tinting, or threading.</h5>
          <h4 className="postcare__h4" >Stop using 2 weeks - BEFORE THE PROCEDURE</h4>
          <h5 className="postcare__h5">Alpha Hydroxy Acid (AHA) products close to the eyebrow area.</h5>
          <h4 className="postcare__h4">Stop using at least 1 month - BEFORE THE PROCEDURE</h4>
          <h5 className="postcare__h5">Retinol or vitamin A products,  chemical Peels, Microdermabrasion and facials.</h5>
          <h4 className="postcare__h4">Should be avoided for 3 months - BEFORE THE PROCEDURE</h4>
          <h5 className="postcare__h5">Botox and filler on the forehead, temple, and eye area.</h5>
        </div>
        <div className="col-12 ml-md-5 ml-lg-0 pl-md-5 pl-lg-0 col-lg-5 mt-lg-5 mt-xl-3 pt-lg-5 pt-xl-0 pr-lg-0">
            <img src={preCare} alt="preCare" className="img-fluid mb-xl-5" style={styles.preCare} />
        </div>
      </div>  
      <div className="row">
        <div className="col-12 col-lg-7 pl-lg-0 pr-lg-5">
        <img src={postCare} alt="preCare" className="img-fluid mb-xl-5" style={styles.postCare} />
        </div>
        <div className="col-12 ml-md-5 ml-lg-0 pl-md-5 pl-lg-0 col-lg-5 mt-lg-5 mt-xl-3 pt-lg-5 pt-xl-0 pr-lg-0">
        <h3 className="postcare__h3">AFTER THE PROCEDURE</h3>
          <h4 className="postcare__h4"><strong> Day 1 – 2</strong></h4>
          <h5 className="postcare__h5">Use a clean tissue every few hours to pick up the clear fluid that is coming out. This will help reduce scabbing. The fluid forms the scabs.</h5>
          <h4 className="postcare__h4">Day 1 – 10</h4>
          <h5 className="postcare__h5" >Starting on the night of your procedure, wash your brows every morning and evening with antibacterial soap with your pointer finger in a circular motion. 
            Lightly rinse off with your fingers. Dab dry and do not rub! 
            Avoid use of abrasive washcloths or sponges. Allow eyebrows to completely dry before applying ointment. Apply the aftercare ointment with 
            freshly washed hands or a Q-Tip. Only a thin layer.</h5>
          <h4 className="postcare__h4">REMEMBER!</h4>
          <h5 className="postcare__h5">DO NOT rub, pick or scratch the treated area. Let any scabbing or dry skin naturally exfoliate off. Picking can cause scarring and pigment loss!</h5>
        </div>
      </div>  
    </div>
    )
}

export default postcare

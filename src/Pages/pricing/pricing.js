import React from 'react'
import styled from "styled-components";
import './pricing.css'


function pricing() {
    return (
        <div className="pricing">
           <h1 className="pricing__h1">SERVICES & PRICING</h1>
           <div className="row">
    <div className="col-12 col-lg-6 pl-lg-0 pr-lg-6">
    <h3>Lip Blush</h3>
   </div>
   <div className="col-12 col-lg-6 pl-lg-0 pr-lg-6">
    <h3>$425
    <Book a href="https://calendly.com/browsjungle/4hours?primary_color=619c1c" target="_blank">Book Now</Book>
    </h3>
   </div>
   <div className="pricing__paragraph">Lip Blush tattoo enhances the natural shape of your lips, giving them that boost of vitality and even coloring.</div>
   </div>
           <div className="row">
    <div className="col-12 col-lg-6 pl-lg-0 pr-lg-6">
    <h3>Powder Brows</h3>
   </div>
   <div className="col-12 col-lg-6 pl-lg-0 pr-lg-6">
    <h3>$425
    <Book a href="https://calendly.com/browsjungle/4hours?primary_color=619c1c" target="_blank">Book Now</Book>
    </h3>
   </div>
   <div className="pricing__paragraph">Powder brows can be done as light as a brow tint or as dark as glam. 
       Recommended for those who want a completely "filled in" brow! Best for ALL skin types. </div>
   </div>
    <div className="row">
    <div className="col-12 col-lg-6 pl-lg-0 pr-lg-6">
    <h3>Microblading</h3>
   </div>
   <div className="col-12 col-lg-6 pl-lg-0 pr-lg-6">
    <h3>$425
    <Book a href="https://calendly.com/browsjungle/4hours?primary_color=619c1c" target="_blank">Book Now</Book>
    </h3>
   </div>
   <div className="pricing__paragraph">Microblading is a permanent procedure that mimics the same size of an eyebrow hair stroke through small incisions made with a microblade. 
    The purpose of microblading is to enhance what you naturally have, and the result is natural-looking, trendy eyebrows. *NOT recommended for oily, or mature skin.</div>
   </div>
   <div className="row">
    <div className="col-12 col-lg-6 pl-lg-0 pr-lg-6">
    <h3>Microblading + Shading (combo)</h3>
   </div>
   <div className="col-12 col-lg-6 pl-lg-0 pr-lg-6">
    <h3>$425
    <Book a href="https://calendly.com/browsjungle/4hours?primary_color=619c1c" target="_blank">Book Now</Book>
    </h3>
   </div>
   <div className="pricing__paragraph">This technique offers the best of both powdered and hair stroke effects combined together to achieve a fluffy, 
       textured, yet defined brow. </div>
   </div>
   
   <h1 className="pricing__h1">Touch ups</h1>
   <div className="pricing__touchup">
  <h6><strong>Touch ups also make an essential part of permanent makeup treatment. You can lose 30% to 40% of the color and intensity as the skin heals. 
      Touch up procedures are to fill, correct, and darken to provide the desired look.</strong></h6>
  </div>
   <div className="row">
    <div className="col-12 col-lg-6 pl-lg-0 pr-lg-6">
    <h3>Touch up</h3>
   </div>
   <div className="col-12 col-lg-6 pl-lg-0 pr-lg-6">
    <h3>$120
    <Book a href="https://calendly.com/browsjungle/4hours?primary_color=619c1c" target="_blank">Book Now</Book>
    </h3>

        
 </div>
   <div className="pricing__paragraph">1 to 3 months after the first session 
    If you do not come back for a touch up during 3 months period, you will need to pay a full price again.</div>
   </div>
   <div className="row">
    <div className="col-12 col-lg-6 pl-lg-0 pr-lg-6">
    <h3>Annual Touch up</h3>
   </div>
   <div className="col-12 col-lg-6 pl-lg-0 pr-lg-6">
    <h3>$150
    <Book a href="https://calendly.com/browsjungle/4hours?primary_color=619c1c" target="_blank">Book Now</Book> </h3>
  
   </div>
   <div className="pricing__paragraph">12 months after touch up session</div>
   </div>
   <div className="row">
    <div className="col-12 col-lg-6 pl-lg-0 pr-lg-6">
    <h3>Biannual touch up</h3>
   </div>
   <div className="col-12 col-lg-6 pl-lg-0 pr-lg-6">
    <h3>$170
    <Book a href="https://calendly.com/browsjungle/4hours?primary_color=619c1c" target="_blank">Book Now</Book>
    </h3>
   </div>
   <div className="pricing__paragraph">24 months after touch up session. If you do not come back for a biannual touch up you will need to pay a full price again. </div>
   </div>
   <div className="pricing__touchup">
  <h6><strong>*A $50 NON-REFUNDABLE BOOKING FEE IS REQUIRED TO RESERVE YOUR APPOINTMENT. THIS FEE WILL GO TOWARDS YOUR BROWS PRICING.</strong></h6>
  </div>
        </div>
    )
}



const Book = styled.a`
  box-shadow: inset 0 0 0 1px #619c1c;
  color: #619c1c;
  margin-left: 80px;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: white;
  text-decoration: none!important;
  &:hover {
    cursor: pointer;
    background-color: #619c1c;
    color: #white;
  }
  @media (max-width: 768px) {
    margin-right:0px;
    font-size: 14px;
    font-weight: 400;
  }
`;
export default pricing

import React from 'react'
import './About.css'
import artist from '../../Assets/ER.png'

function About() {
    return (
        <div className="about">
               <div className="about__content">
                   <div className="about_img"><img src={artist} aria-hidden alt="Artist-image." /></div>
       <div className="about__text">
            <h4>DEAR CLIENTS AND FRIENDS </h4>
            My name is <strong> 'NAME' </strong>, and I am excited to welcome you to
            Brows Jungle, LLC! 
            I honestly believe that brows can make or break any look, and my passion for what I do,
            combined with the desire to be the best, distinguishes me from other artists.
            I am a perfectionist by nature,
            and extremely detail oriented, which as a PMU is a huge advantage.
            I use innovative techniques and superior products to enhance and highlight
            my client’s natural beauty, for exceptionally gorgeous results. 
            If you are looking for a company that makes your brow satisfaction their top priority,
            Brows Jungle, LLC is the place for you! 
            I am looking forward to seeing you soon!  
         </div>
            </div>
            </div>
    )
}

export default About

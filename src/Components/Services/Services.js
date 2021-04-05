import React from 'react'
import './Services.css'
import candidate from '../../Assets/services-logo/candidate.png'
import gallery from '../../Assets/services-logo/gallery.png'
import postcare from '../../Assets/services-logo/postcare.png'
import pricing from '../../Assets/services-logo/pricing.png'
import candidate_text from '../../Assets/services-logo-text/candidate_text.png'
import gallery_text from '../../Assets/services-logo-text/gallery_text.png'
import postcare_text from '../../Assets/services-logo-text/post-care_text.png'
import pricing_text from '../../Assets/services-logo-text/pricing_text.png'

function Services() {
    return (
        <div className="services">
         <div className="services__content">
         <a href="/candidate" className="services__content__image" rel="candidate">
            <img src={candidate_text} alt="candidate_text"/>
            <img src={candidate} alt="gallery"/>
              
             </a>
             <a href="/gallery" className="services__content__image" rel="gallery">
             <img src={gallery_text} alt="gallery_text"/>
             <img src={gallery} alt="gallery"/>
                
             </a>
             <a href="/postcare" className="services__content__image" rel="postcare">
             <img src={postcare_text} alt="postcare_text"/>
             <img src={postcare} alt="postcare"/>
               
             </a>
             <a href="/pricing" className="services__content__image" rel="pricing">
             <img src={pricing_text} alt="pricing_text"/>
             <img src={pricing} alt="pricing"/>
             </a>

         </div>
        </div>
    )
}

export default Services

import React from 'react'
import './Services.css'
import candidate from '../../Assets/services-logo/candidate.png'
import gallery from '../../Assets/services-logo/gallery.png'
import postcare from '../../Assets/services-logo/postcare.png'
import pricing from '../../Assets/services-logo/pricing.png'

function Services() {
    return (
        <div className="services">
         <div className="services__content">
         <a href="/candidate" className="services__content__image" rel="candidate">
                 <img src={candidate} alt="candidate"/>
             </a>
             <a href="/gallery" className="services__content__image" rel="gallery">
                 <img src={gallery} alt="gallery"/>
             </a>
             <a href="/postcare" className="services__content__image" rel="postcare">
                 <img src={postcare} alt="postcare"/>
             </a>
             <a href="/pricing" className="services__content__image" rel="pricing">
                 <img src={pricing} alt="pricing"/>
             </a>
         </div>
        </div>
    )
}

export default Services

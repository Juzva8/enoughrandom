import React from 'react'
import './Services.css'
import PmuBrows from '../../Assets/services-logo/PmuBrows.png'
import gallery from '../../Assets/services-logo/gallery.png'
import LipBlush from '../../Assets/services-logo/LipBlush.png'
import pricing from '../../Assets/services-logo/pricing.png'
import PmuBrows_text from '../../Assets/services-logo-text/BROWS_PMU.png'
import gallery_text from '../../Assets/services-logo-text/gallery_text-copy.png'
import Lip_blush_text from '../../Assets/services-logo-text/Lip_blush_text.png'
import pricing_text from '../../Assets/services-logo-text/pricing_text-copy.png'

function Services() {
    return (
        <div className="services">
         <div className="services__content">
         <a href="/PmuBrows" className="services__content__image" rel="PmuBrows">
            <img src={PmuBrows_text} alt="PmuBrows_text"/>
            <img src={PmuBrows} alt="gallery"/>
              
             </a>
            
             <a href="/LipBlush" className="services__content__image" rel="LipBlush">
             <img src={Lip_blush_text} alt="Lip_blush_text"/>
             <img src={LipBlush} alt="LipBlush"/>
               
             </a>

                 <a href="/pricing" className="services__content__image" rel="pricing">
             <img src={pricing_text} alt="pricing_text"/>
             <img src={pricing} alt="pricing"/>
             </a>


             <a href="/gallery" className="services__content__image" rel="gallery">
             <img src={gallery_text} alt="gallery_text"/>
             <img src={gallery} alt="gallery"/>
                
             </a>
             
         
         </div>
        </div>
    )
}

export default Services

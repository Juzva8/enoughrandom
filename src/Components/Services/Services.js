import React from 'react'
import './Services.css'
import scissors from '../../Assets/Scissor.png'
import brush from '../../Assets/brush.png'
import brows from '../../Assets/brows.png'
import nails from '../../Assets/Nails.png'

function Services() {
    return (
        <div className="services">
         <div className="services__content">
         <a href="/makeup" className="services__content__image" rel="Makeup">
                 <img src={brush} alt="scissors"/>
             </a>
             <a href="/haircut" className="services__content__image" rel="Haircut">
                 <img src={scissors} alt="scissors"/>
             </a>
             <a href="/brows" className="services__content__image" rel="Brows">
                 <img src={brows} alt="scissors"/>
             </a>
             <a href="/nails" className="services__content__image" rel="Nails">
                 <img src={nails} alt="scissors"/>
             </a>
         </div>
        </div>
    )
}

export default Services

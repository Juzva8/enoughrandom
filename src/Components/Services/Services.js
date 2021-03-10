import React from 'react'
import './Services.css'
import scissors from '../../Assets/Scissor.png'
import brush from '../../Assets/brush.png'
import brows from '../../Assets/brows.png'

function Services() {
    return (
        <div className="services">
         <div className="services__content">
             <a href="/haircut" className="services__content__image" rel="Haircut">
                 <img src={scissors} alt="scissors"/>
             </a>
             <a href="/makeup" className="services__content__image" rel="Makeup">
                 <img src={brush} alt="scissors"/>
             </a>
             <a href="/brows" className="services__content__image" rel="Brows">
                 <img src={brows} alt="scissors"/>
             </a>
              <a className="services__content__image">
                 <img src={scissors} alt="scissors"/>
             </a>
         </div>
        </div>
    )
}

export default Services

import React from 'react'
import './Services.css'
import scissors from '../../Assets/Scissor.png'

function Services() {
    return (
        <div className="services">
         <div className="services__content">
             <a href="/haircut" className="services__content__image" rel="Haircut">
                 <img src={scissors} alt="scissors"/>
             </a>
             <a className="services__content__image">
                 <img src={scissors} alt="scissors"/>
             </a>
             <a className="services__content__image">
                 <img src={scissors} alt="scissors"/>
             </a>
              <a className="services__content__image">
                 <img src={scissors} alt="scissors"/>
             </a>
           
         </div>
        </div>
    )
}

export default Services

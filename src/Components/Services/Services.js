import React from 'react'
import './Services.css'
import scissors from '../../Assets/Scissor.png'

function Services() {
    return (
        <div className="services">
         <div className="services__content">
             <div className="services__content__image">
                 <img src={scissors} alt="scissors"/>
             <h3>Hair cut</h3>
             </div>
             <div className="services__content__image">
                 <img src={scissors} alt="scissors"/>
             <h3>Make up</h3>
             </div>
             <div className="services__content__image">
                 <img src={scissors} alt="scissors"/>
             <h3>Microblading</h3>
             </div>
              <div className="services__content__image">
                 <img src={scissors} alt="scissors"/>
             <h3>Shading</h3>
             </div>
           
         </div>
        </div>
    )
}

export default Services

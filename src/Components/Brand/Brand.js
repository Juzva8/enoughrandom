import React from 'react'
import Picture from '../../Assets/Two_Eyebrows_Black.jpg'
import Services from '../Services/Services'
import './Brand.css'

function Brand() {
    return (
        <div className="brand">
        <div className="brand__mainPicture">
       <img src={Picture} alt="main_image"/>
       </div>
       <Services />
    </div>
    )
}

export default Brand

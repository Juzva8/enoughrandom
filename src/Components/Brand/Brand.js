import React from 'react'
import Picture from '../../Assets/Two_Eyebrows_Black.jpg'
import './Brand.css'
import Services from '../Services/Services'

function Brand() {
    return (
        <div ClassName="brand">
        <div className="brand__mainPicture">
       <img src={Picture} alt="main_image"/>
       </div>
       <Services />
    </div>
    )
}

export default Brand

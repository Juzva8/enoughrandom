import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import model_1 from '../../Assets/Gallery/1.jpg'
import model_2 from '../../Assets/Gallery/2.jpg'
import model_3 from '../../Assets/Gallery/3.jpg'
import model_4 from '../../Assets/Gallery/4.jpg'
import model_5 from '../../Assets/Gallery/5.jpg'
import model_6 from '../../Assets/Gallery/6.jpg'


function ImageSlider() {
    let settings = {
        dit:true,
        infinite:true,
        speed:500,
        slidesToShow:3,
        slidesToScroll:1,
        cssEase: "linear",
    }
    return (
    <Slider {...settings}>
        <div className="card-wrapper">
            <div className="card">
                <div className="card-image">
                    <img src={model_1}/>
                </div>
                <ul className="social-icons">
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    </ul>
            </div>
    </div>
    </Slider>
    )
}

export default ImageSlider

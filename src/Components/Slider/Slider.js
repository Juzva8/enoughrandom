import { useState } from "react";
import Slider from 'react-slick'
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'
import './Slider.css'
import model_1 from '../../Assets/Gallery/1.jpg'
import model_2 from '../../Assets/Gallery/2.jpg'
import model_3 from '../../Assets/Gallery/3.jpg'
import model_4 from '../../Assets/Gallery/4.jpg'
import model_5 from '../../Assets/Gallery/5.jpg'
import model_6 from '../../Assets/Gallery/6.jpg'
import model_7 from '../../Assets/Gallery/17.png'
import model_8 from '../../Assets/Gallery/8.jpg'
import model_9 from '../../Assets/Gallery/9.jpg'
import model_10 from '../../Assets/Gallery/10.jpg'


const images = [ model_1, model_2, model_3, model_4, model_5, model_6, model_7, model_8, model_9, model_10]

function SliderComponent() {

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 400,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="Slider">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img className="Slider_image" src={img} alt={img} />
          </div>
        ))}
      </Slider>
</div>

            
  
    )
}

export default SliderComponent

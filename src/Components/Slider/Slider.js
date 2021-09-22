import { useState } from "react";
import Slider from 'react-slick'
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'
import './Slider.css'
import pmu from '../../Assets/Gallery/pmu.jpg'
import Ombré from '../../Assets/Gallery/Ombré.jpg'
import Powder_Brow from '../../Assets/Gallery/Powder_Brow.jpg'
import Touch_Up from '../../Assets/Gallery/Touch_Up.jpg'
import Combination_Brow from '../../Assets/Gallery/Combination_Brow.jpg'
import Microblading from '../../Assets/Gallery/Microblading.jpg'
import BROW_DADDY from '../../Assets/Gallery/BROW_DADDY.png'
import pmuangel from '../../Assets/Gallery/pmuangel.jpg'
import Corona from '../../Assets/Gallery/Corona.jpg'
import Riverside from '../../Assets/Gallery/Riverside.jpg'
import brows from '../../Assets/Gallery/brows.jpg'
import eyebrow from '../../Assets/Gallery/eyebrow.jpg'
import Permanent from '../../Assets/Gallery/Permanent.jpg'
import Semi from '../../Assets/Gallery/Semi.jpg' 
import tattoo from '../../Assets/Gallery/tattoo.jpg'
import technique from '../../Assets/Gallery/technique.jpg'
import Treatment from '../../Assets/Gallery/Treatment.jpg'




const images = [ pmu, Ombré, Powder_Brow, Touch_Up, Combination_Brow, Microblading, BROW_DADDY, pmuangel, Corona, Riverside, brows, eyebrow, Permanent, Semi, tattoo, technique, Treatment ]

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

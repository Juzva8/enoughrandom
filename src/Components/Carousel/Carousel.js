import React from 'react';
import { Carousel } from 'react-bootstrap';
import model_1 from '../../Assets/Gallery/1.jpg'
import model_2 from '../../Assets/Gallery/2.jpg'
import model_3 from '../../Assets/Gallery/3.jpg'
import model_4 from '../../Assets/Gallery/4.jpg'
import model_5 from '../../Assets/Gallery/5.jpg'
import model_6 from '../../Assets/Gallery/6.jpg'
import './Carousel.css'

function Carousel1() {
    return (
        <div className="carousel1">
            <Carousel fade>
  <Carousel.Item>
    <img
      className="Carousel__item"
      src={model_1}
      alt="First Model"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="Carousel__item"
      src={model_2}
      alt="Second Model"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="Carousel__item"
      src={model_3}
      alt="Third Model"
    />   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="Carousel__item"
      src={model_4}
      alt="fourth Model"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="Carousel__item"
      src={model_5}
      alt="fifth Model"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="Carousel__item"
      src={model_6}
      alt="sixth Model"
    />
  
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Carousel1

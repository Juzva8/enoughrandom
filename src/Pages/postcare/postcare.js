import React from 'react'
import './postcare.css'
import Carousel from 'react-bootstrap/Carousel'
import makeup1 from '../../Assets/Makeup/makeup1.jpg'
import makeup2 from '../../Assets/Makeup/makeup2.jpg'
import makeup3 from '../../Assets/Makeup/makeup3.jpg'



function postcare() {
    return (
        <div className="makeup">
            
            <Carousel fade>
  <Carousel.Item>
    <img
      className="postcare__img"
      src={makeup1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="postcare__img"
      src={makeup2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="postcare__img"
      src={makeup3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default postcare

import React from 'react'
import './candidate.css'
import Carousel from 'react-bootstrap/Carousel'
import brows1 from '../../Assets/Brows/brows1.png'
import brows2 from '../../Assets/Brows/brows2.jpg'
import brows3 from '../../Assets/Brows/brows3.jpg'

function candidate() {
    return (
        <div className="brows">
   <Carousel fade>
  <Carousel.Item>
    <img
      className="brows__img"
      src={brows1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="brows__img"
      src={brows2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="brows__img"
      src={brows3}
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

export default candidate

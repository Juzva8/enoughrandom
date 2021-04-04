import React from 'react'
import './pricing.css'
import Carousel from 'react-bootstrap/Carousel'
import nails1 from '../../Assets/Nails/nails1.jpeg'
import nails2 from '../../Assets/Nails/nails1.jpeg'
import nails3 from '../../Assets/Nails/nails1.jpeg'

function pricing() {
    return (
        <div className="pricing">
            <Carousel fade>
  <Carousel.Item>
    <img
      className="pricing__img"
      src={nails1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="pricing__img"
      src={nails2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="pricing__img"
      src={nails3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
  <div>

  </div>
        </div>
    )
}

export default pricing
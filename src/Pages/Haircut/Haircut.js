import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Haircut.css'
import hair1 from '../../Assets/Hair/hair1.jpg'
import hair2 from '../../Assets/Hair/hair2.jpg'
import hair3 from '../../Assets/Hair/hair3.jpg'

function Haircut() {
    return (
        <div className="haircut">
            <Carousel fade>
  <Carousel.Item>
    <img
      className="haircut__img"
      src={hair1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="haircut__img"
      src={hair2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="haircut__img"
      src={hair3}
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

export default Haircut

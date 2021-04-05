import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './gallery.css'
import model_1 from '../../Assets/Gallery/1.jpg'
import model_2 from '../../Assets/Gallery/2.jpg'
import model_3 from '../../Assets/Gallery/3.jpg'
import model_4 from '../../Assets/Gallery/4.jpg'
import model_5 from '../../Assets/Gallery/5.jpg'
import model_6 from '../../Assets/Gallery/6.jpg'




function gallery() {
    return (
        <div className="gallery">
    
          <div className="gallery_carousel">
          <h2>PHOTO GALLERY</h2>
            <Carousel fade>
  <Carousel.Item>
    <img
      className="gallery__img"
      src={model_1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="gallery__img"
      src={model_2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="gallery__img"
      src={model_3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="gallery__img"
      src={model_4}
      alt="Fourth  slide"
    />
    <Carousel.Caption>
      <h3>Fourth slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="gallery__img"
      src={model_5}
      alt="Fifth slide"
    />
    <Carousel.Caption>
      <h3>Fifth slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="gallery__img"
      src={model_6}
      alt="Sixth  slide"
    />
    <Carousel.Caption>
      <h3>Sixth slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
</div>
</div>

            
  
    )
}

export default gallery

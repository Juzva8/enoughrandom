import React from 'react'
import ImageSlider from '../../Components/ImageSlider/ImageSlider'
import './gallery.css'
// import Carousel from 'react-bootstrap/Carousel'
// import model_1 from '../../Assets/Gallery/1.jpg'
// import model_2 from '../../Assets/Gallery/2.jpg'
// import model_3 from '../../Assets/Gallery/3.jpg'
// import model_4 from '../../Assets/Gallery/4.jpg'
// import model_5 from '../../Assets/Gallery/5.jpg'
// import model_6 from '../../Assets/Gallery/6.jpg'

function gallery() {
    return (
        <div className="gallery">
          <h2>PHOTO GALLERY</h2>
          <ImageSlider />
            {/* <Carousel fade>
  <Carousel.Item>
    <img
      className="gallery__img"
      src={hair1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="gallery__img"
      src={hair2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="gallery__img"
      src={hair3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */}
</div>

            
  
    )
}

export default gallery

import React from "react";
import './gallery.css'
// import SliderComponent from '../../Components/Slider/Slider'
import Carousel1 from '../../Components/Carousel/Carousel'




function gallery() {
  return (
      <div className="gallery">
<div className="gallery__text"> <h2>PHOTO GALLERY</h2></div>
        {/* <SliderComponent /> */}
        <Carousel1 />
</div>
  )
}

export default gallery
import React from "react";
import './gallery.css'
import SliderComponent from '../../Components/Slider/Slider'




function gallery() {
  return (
      <div className="gallery">
<div className="gallery__text"> <h2>PHOTO GALLERY</h2></div>
        <SliderComponent />
</div>
  )
}

export default gallery
import React from 'react'
import './candidate.css'
import doctor from '../../Assets/doctor.png';
import skinType from '../../Assets/skinType.png';

function candidate() {
    return (
        <div className="brows">
    <h1>AM I A GOOD CANDIDATE FOR PERMANENT MAKEUP?</h1>
    <div className="row">
        <div className="col-12 col-lg-6 pl-lg-0 pr-lg-6">
        <img src={skinType} alt="skinType" className="img-fluid mb-xl-6"/>
          </div>
          <div className="col-12 col-lg-6 pl-lg-0 pr-lg-6">
          <img src={doctor} alt="doctor" className="img-fluid mb-xl-6"/>

          </div>
          </div>
        </div>
    )
}

export default candidate

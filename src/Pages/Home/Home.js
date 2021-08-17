import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect';

function Home() {
    return (
        <div className="home">
          <h1 className="home_h1"> Microblading near me in Corona CA</h1>
          <h2 className="home_h2">Best PMU in Riverside, CA</h2>
          <h3 className="home_h2">Best Lip Blushing in Corona, CA</h3>
         <Typewriter 
         onInit = {(typewriter) => {
           typewriter
           .typeString("LET'S ENHANCE AND HIGHLIGHT YOUR NATURAL BEAUTY!")
           .start()
         }}
         />
        </div>
    )
}

export default Home

import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect';

function Home() {
    return (
        <div className="home">
          <h1 className="home_h1"> microblading brows near me corona ca</h1>
          <h2 className="home_h2">Best microblading in Riverside, CA</h2>
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

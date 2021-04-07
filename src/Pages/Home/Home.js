import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect';

function Home() {
    return (
        <div className="home">
         <Typewriter 
         onInit = {(typewriter) => {
           typewriter
           .typeString("GET MICROBLADING! ")
           .pauseFor(2000)
           .deleteAll()
           .typeString("LET'S ENHANCE AND HIGHLIGHT YOUR NATURAL BEAUTY!")
           .start()
         }}
         />
        </div>
    )
}

export default Home

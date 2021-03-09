import React from 'react'
import './Home.css'
import Picture from '../../Assets/Two_Eyebrows_Black.jpg'
import Test from '../../Assets/Test.jpeg'

function Home() {
    return (
        <div ClassName="home">
            <div className="home__mainPicture">
           <img src={Picture} alt="main_image"/>
           </div>
           <div className="home__otherPhoto">
           </div>
        </div>
    )
}

export default Home

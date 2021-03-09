import React from 'react'
import './Home.css'
import Picture from '../../Assets/Two_Eyebrows_Black.jpg'

function Home() {
    return (
        <div ClassName="home">
            <div className="home__mainPicture">
           <img src={Picture} alt="main_image"/>
           </div>
           <div className="home__otherPhoto">
           <img src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/07/31143240/max-the-westie-1-500x486.jpg" alt="main_image"/>
           </div>
        </div>
    )
}

export default Home

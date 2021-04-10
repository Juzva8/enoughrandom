import React from 'react';
import Zoom from 'react-reveal/Zoom';
import './About.css';
import artist from '../../Assets/ER.png';

const styles = {
    main: {
      lineHeight: "1.5em",
      fontSize: "22px",
    },
    artist: {
        boxShadow: "5px 5px 20px -5px black",
        borderRadius: "25px"
    },
  };
  
  function About() {
    return (
      <div className="about">
        <div className="row">
          <div className="col-12 col-lg-7 pl-lg-0 pr-lg-5">
            <h4 className="text-black mb-5" style={styles.main}>
            DEAR CLIENTS AND FRIENDS
            </h4>
            <h5 className="text-black mb-5" style={styles.main}>
            My name is <strong> Erika </strong>, and I am excited to welcome you to
            Beauty Salon, LLC! 
I honestly believe that brows can make or break any look, and my passion for what I do,
combined with the desire to be the best, distinguishes me from other artists.
I am a perfectionist by nature,
and extremely detail oriented, which as a PMU is a huge advantage.
I use innovative techniques and superior products to enhance and highlight
my client’s natural beauty, for exceptionally gorgeous results. 
If you are looking for a company that makes your brow satisfaction their top priority,
Beauty Salon, LLC is the place for you! 
I am looking forward to seeing you soon!  
            </h5>
          </div>
          <Zoom>
          <div className="col-12 ml-md-5 ml-lg-0 pl-md-5 pl-lg-0 col-lg-5 mt-lg-5 mt-xl-3 pt-lg-5 pt-xl-0 pr-lg-0">
              <img src={artist} alt="Artist" className="img-fluid mb-xl-5" style={styles.artist} />
              
          </div>
          </Zoom>
        </div>  
      </div>
    );
  }

export default About

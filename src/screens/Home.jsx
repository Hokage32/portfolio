import React from "react";
import { Link } from "react-router-dom";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";
import { motion } from "framer-motion";
import Rengoku from "../images/Rengoku.png";
import Gojo from '../images/Gojo.png'
import { Splide, SplideSlide,SplideTrack } from "@splidejs/react-splide";
import '@splidejs/react-splide/css'

const Home = () => {
  return (
    <div className="home-intro-box">
      {/* <img src={Gojo} alt="" className="gojo"/>
      <div className="home-intro">
        <div className="description-box">
          <div className="about-description">
            <h2 className="project-title">
              Hey, I'm Levi. A developer with a love for design and creativity.
            </h2>

            <h3>
              I can learn just about anything, and I enjoy learning and gaining
              inspiration from others.
            </h3>
            <h4>I also love food, anime, and dogs.</h4>

            <div className="socials">
              <div className="socials-box">
                <div className="social-tags">
                  <Link
                    to={"https://www.linkedin.com/in/levi-raoelina-71a96326b/"}
                  >
                    <motion.img
                      whileHover={{ scale: 1.2 }}
                      src={linkedin}
                      alt=""
                    />
                  </Link>
                  <Link to={"https://github.com/Hokage32"}>
                    <motion.img
                      whileHover={{ scale: 1.2 }}
                      src={github}
                      alt=""
                    />
                  </Link>

                  <h3>Leviraoelina34@gmail.com</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="animeBox">
    <div className="anime">

      <img src={Rengoku} alt="" className="rengoku"/>
      
    </div>
    </div> */}
<Splide options={{pagination: false}} aria-label="My Favorite Images">
  
  
  <SplideSlide>
   <h1>Hi, I'm Levi!</h1>
   
  </SplideSlide>
  
  <SplideSlide>
    <h1>A full stack developer with a love of anime</h1>
  </SplideSlide>
  <SplideSlide>
    <h1>Let's work together!</h1>
  </SplideSlide>
 
</Splide>

<motion.div animate={{x:[300,0,0]}}>
  <img src={Gojo} alt="" className="gojo"/>
</motion.div>
<motion.div animate={{x:[-300,0,0]}}>
<img src={Rengoku} alt="" className="rengoku"/>
</motion.div>
    </div>

  );
};

export default Home;

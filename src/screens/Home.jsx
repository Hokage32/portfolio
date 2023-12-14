import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Rengoku from "../images/Rengoku.png";
import Gojo from '../images/Gojo.png'
import Tanjiro from '../images/Tanjiro.png'
import Inosuke from '../images/Inosuke.png'
import Zenetsu from '../images/Zenetsu.png'
import { Splide, SplideSlide,SplideTrack } from "@splidejs/react-splide";
import '@splidejs/react-splide/css'

const Home = () => {
const [hover, setHover] = useState(false)
const handleHover = () => {
setHover(!hover)
}




  return (
    <div className="home-intro-box">
    
<Splide options={{pagination: true}} aria-label="about-me">
  
  
  <SplideSlide>
   <h2>Hi, I'm Levi.</h2>
   
  </SplideSlide>
  
  <SplideSlide>
    <div className="about-me">
    <h2>I'm a full stack developer with a love of anime.</h2>
    </div>
  </SplideSlide>
  <SplideSlide>
    <h2>Let's work together!</h2>
  </SplideSlide>
 <SplideSlide>
  <h2 style={{textDecorationLine:"underline"}}>Skillset</h2>
  <p></p>
  <li>JavaScript</li>
  <li>React</li>
  <li>CSS</li>
  <li>Node.js</li>
  <li>Express</li>
  <br />
  
 </SplideSlide>
</Splide>

<motion.div animate={{x:[300,0,0]}}
transition={{ease:"circOut", duration:2}}

>
  <motion.img src={Inosuke} alt="" className="gojo" whileHover={{rotate:360}}/>
  <motion.img src={Tanjiro} alt="" className="gojo" whileHover={{rotate:360}}/>
  <motion.img src={Zenetsu} alt="" className="gojo" whileHover={{rotate:360}}/>
</motion.div>

    </div>

  );
};

export default Home;

import React from 'react';
import home1 from '../img/home1.png';
//styled
import {About, Description, Hide, Image} from '../styles';
//framer motion
import { motion } from 'framer-motion'

const AboutSection = () => {
    return(
        <About>
        <Description>
        <div className="title">
        <Hide>
        <motion.h2 animate={{opacity: 1, transition:{duration:2}}} initial={{opacity:0}}>we work to make</motion.h2>
        </Hide>
        <Hide>
        <h2>your <span>dream
        </span> come
        </h2>
        </Hide>
        <Hide>
        <h2>true</h2>
        </Hide>
        </div>
        <p>contact us for any..</p>
        <button type="">Contact Us</button>
        </Description>
        {/**end of descriptio */}
        <Image>
            <img src={home1} alt="guy with camera"/>
        </Image>
        </About>
    );
}

export default AboutSection;
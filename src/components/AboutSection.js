import React from 'react';
import home1 from '../img/home1.png';
//styled
import {About, Description, Hide, Image} from '../styles';
//framer motion
import { motion } from 'framer-motion';
import {titleAnim, fade, photoAnim} from '../animation';
import Wave from './Wave';

const AboutSection = () => {

    //frame emotion variant
    const titleAnim ={
        hidden: {opacity: 0},
        show: {opacity: 1, transition: {duration: 2}}
    }

    const container ={
        hidden: {x: 100},
        show: {x: 0, transition: {duration: 0.75, ease: "easeOut", staggerChildren: 1,  when: "beforChildren"}},
    }

    return(
        <About>
        <Description>
        <motion.div variants={container} initial="hidden" animate="show"  className="title">
        <Hide>
        <motion.h2
        variants={titleAnim} initial="hidden" animate="show"
        >we work to make</motion.h2>
        </Hide>
        <Hide>
        <motion.h2
        variants={titleAnim}>your <span>dream
        </span> come
        </motion.h2>
        </Hide>
        <Hide>
        <motion.h2
        variants={titleAnim}>true</motion.h2>
        </Hide>
        </motion.div>
        <motion.p variants={fade}>contact us for any..</motion.p>
        <motion.button variants={fade} type="">Contact Us</motion.button>
        </Description>
        {/**end of descriptio */}
        <Image>
            <motion.img variants={photoAnim} src={home1} alt="guy with camera"/>
            {/*<motion.img initial="hidden" animate="show" variants={photoAnim} src={home1} alt="guy with camera"/>*/}
        </Image>
        <Wave />
        </About>
    );
}

/*
 <motion.h2 animate={{opacity: 1, transition:{duration:2}}} initial={{opacity:0}}>we work to make</motion.h2>
*/

export default AboutSection;
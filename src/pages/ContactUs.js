import React from 'react'
//animations
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';
const ContactUs = () => {
  return (
    <motion.div style={{background: "#fff"}} variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <h1 style={{color: "#000"}}>yo contact</h1>
    </motion.div>
  )
}

export default ContactUs

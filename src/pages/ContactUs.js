import React from 'react'
//animations
import {motion} from 'framer-motion';
import {pageAnimation,titleAnim} from '../animation';
import styled from 'styled-components';

const ContactUs = () => {
  return (
    <ContactStyle style={{background: "#fff"}} variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      {/*<h1 style={{color: "#000"}}>yo contact</h1>*/}
      <Title>
         <Hide>
            <motion.h2  variants={titleAnim}>
               Get in touch 
            </motion.h2>
         </Hide>
      </Title>
      <div>
        <Social variants={titleAnim}>
          <Circle />
          <h2>Send us a message</h2>
        </Social>
      </div>
    </ContactStyle>
  )
}

const ContactStyle = styled(motion.div)`
padding: 5rem 10rem;
color: #353535;
min-height: 90vh;

`;

const Title = styled.div`
margin-bottom: 4rem;
color: #000;
h2{
  color: #000;
}
`;

const Hide = styled.div`
overflow: hidden;
`;

const Circle = styled.div`
border-radius: 50%;
width: 3rem;
height: 3rem;
background: #353535;
`;

const Social = styled(motion.div)`
display: flex;
align-items: center;
h2{
  margin: 2rem;
  color: #000;
}
`;

export default ContactUs

import React from 'react';
import home1 from '../img/home1.png';
//styled
import styled from 'styled-components';

const AboutSection = () => {
    return(
        <About>
        <Description>
        <div className="title">
        <Hide>
        <h1>we work to make</h1>
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

const About = styled.div`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5rem 10rem;
color: white;

`;

const Description = styled.div`
flex: 1;
padding-right: 5rem;
h2{
    font-weight: lighter;
}
`;

const Image = styled.div`
flex: 1;
overflow: hidden;
/* access by nesting (img is child to div) */
img{
    width: 100%;
    height: 80vh;
    /* fix image  */
    object-fit: cover;
}
`;

const Hide = styled.div`
overflow: hidden;
`;

export default AboutSection;
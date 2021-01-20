import React from 'react';
import home1 from '../img/home1.png';
//styled
import styled from 'styled-components';
import {About, Description, Hide, Image} from '../styles';

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

export default AboutSection;
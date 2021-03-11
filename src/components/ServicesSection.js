import React from 'react'
//import icons
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'
//styled
import styled from 'styled-components';
import {About, Description, Hide, Image} from '../styles';
import {useInView} from 'react-intersection-observer';
import {useAnimation} from 'framer-motion';
import {fade} from '../animation';

 const ServicesSection = () => {
     const controls = useAnimation();
     const [element, view] = useInView({threshold: 0.5});

     if(view){
         controls.start('show');
     }else{
         controls.start('hidden');
     }
    return (
        <Services variants={fade}>
            <Description>
                <h2>high <span>quality</span> services</h2>
                <Cards>
                <Card>
                    <div className="icon">
                        <img alt="bo" src={clock}/>
                        <h3>Efficient</h3>
                    </div>
                    <p>lorem5kjvkdjv</p>
                </Card>
                {/*end of card*/} 
                <Card>
                <div className="icon">
                    <img alt="bo" src={teamwork}/>
                    <h3>Teamwork</h3>
                </div>
                <p>lorem5kjvkdk</p>
            </Card>
            {/*end of card*/} 
            <Card>
            <div className="icon">
                <img alt="bo" src={diaphragm}/>
                <h3>Diaphragm</h3>
            </div>
            <p>lorem5kjv,mn,mn,n</p>
        </Card>
        {/*end of card*/} 
        <Card>
        <div className="icon">
            <img alt="bo" src={money}/>
            <h3>Affordable</h3>
        </div>
        <p>lorem5kjvkdjvkhjkjhk</p>
    </Card>
    {/*end of card*/} 
                </Cards>
            </Description>
            <Image>
                <img alt="bo" src={home2}/>
            </Image>
        </Services>
    );
};

const Services = styled(About)`
h2{
    padding-bottom: 5rem;
}
p{
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
}
`;

const Cards = styled.div`
display: flex;
flex-wrap: wrap;
`;

const Card = styled.div`
flex-basis: 15rem;
.icon{
    display: flex;
    align-items: center;

    h3{
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;
    }
}
`;

export default ServicesSection;

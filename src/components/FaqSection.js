import React, {useState}  from 'react'
import Toggle from './Toggle'
import {AnimateSharedLayout} from 'framer-motion';
//styled
import styled from 'styled-components';
import {About} from '../styles';
import {useScroll} from './useScroll';
import {fade} from '../animation';


const FaqSection = () => {
   // const [faqToggle,setFaqToggle] = useState(false);
   const [element, controls] = useScroll();
        return (
            <Faq variants={fade} ref={element} animate={controls} initial="hidden">
                <h2>Any Questions  <span>FAQ</span></h2>
                <AnimateSharedLayout>
                <Toggle title="How do I start">
                
                    {/* <h4>How do I start</h4>*/}
                    <div className="answer">
                        <p>lorcdlkjcdslkjcdlkcjdsklds</p>
                        <p>lorcdlkjcdslkjcdlkcjdskldsxzkxcjkxzckxjchzxkjhzxkjhzxkj</p>
                    </div>
                    <div className="faq-line"></div>
               
                </Toggle>
                {/*end of question*/} 
                <Toggle title="Daily schedual">
                {/*<div className="question">*/}
                {/* <h4>Daily schedual</h4>*/}
                <div className="answer">
                    <p>lorcdlkjcdslkjcdlkcjdsklds</p>
                    <p>lorcdlkjcdslkjcdlkcjdskldsxzkxcjkxzckxjchzxkjhzxkjhzxkj</p>
                </div>
                {/*<div className="faq-line"></div>*/}
            {/*</div>*/}
            </Toggle>
            {/*end of question*/} 
            <Toggle title="Diffrent payment methods">
           
            {/* <h4>Diffrent payment methods</h4>*/}
            <div className="answer">
                <p>lorcdlkjcdslkjcdlkcjdsklds</p>
                <p>lorcdlkjcdslkjcdlkcjdskldsxzkxcjkxzckxjchzxkjhzxkjhzxkj</p>
            </div>
            {/* <div className="faq-line"></div>*/}
        </Toggle>
        {/*end of question*/} 
        <Toggle title="What product do you offer">
        {/* <h4>What product do you offer</h4>*/}
        <div className="answer">
            <p>lorcdlkjcdslkjcdlkcjdsklds</p>
            <p>lorcdlkjcdslkjcdlkcjdskldsxzkxcjkxzckxjchzxkjhzxkjhzxkj</p>
        </div>
        {/* <div className="faq-line"></div>*/}
    </Toggle>
    {/*end of question*/} 
    </AnimateSharedLayout>
            </Faq>
        );
}

const Faq = styled(About)`
display: block;
span{
    display: block;
}

h2{
    padding-bottom: 2rem;
    font-weight: lighter;
}
.faq-line{
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
}
.question{
    padding: 3rem 0rem;
    cursor: pointer;
}
.answer{
    padding: 2rem 0rem;

    p{
        padding: 1rem 0rem;
    }
}
`;

export default FaqSection


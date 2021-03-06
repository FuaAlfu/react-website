import styled from 'styled-components';
import {motion} from 'framer-motion';

export const About = styled(motion.div)`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5rem 10rem;
color: white;
/*(for test)
 position: absolute;
top: 10%;
left: 0%; */
`;

export const Description = styled.div`
flex: 1;
padding-right: 5rem;
z-index: 2;
h2{
    font-weight: lighter;
}
`;

export const Image = styled.div`
z-index: 2;
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

export const Hide = styled.div`
overflow: hidden;
`;
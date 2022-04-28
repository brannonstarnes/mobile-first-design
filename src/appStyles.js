import styled from 'styled-components';
import background from './media/banackground.jpg'


export const AppWrap = styled.div`
    width: 100%;
    height: 500vh;
    border: 1px solid red;
    background-image: URL(${background});
    background-repeat: repeat-y;
`;
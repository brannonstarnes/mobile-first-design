import styled from 'styled-components';
import background from './media/banackground.jpg'


export const AppWrap = styled.div`
    max-width: 100vw;
    height: 100%;
    background-image: URL(${background});
    background-repeat: repeat-y repeat-x;
    display: flex;
    flex-flow: column nowrap;
    justify-content: top;
    align-items: center;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
`;
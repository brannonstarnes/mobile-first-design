import styled from 'styled-components';
import background from './media/banackground.jpg'


export const AppWrap = styled.div`
    max-width: 100vw;
    height: 500vh;
    border: 4px solid red;
    background-image: URL(${background});
    background-repeat: repeat-y;
    display: flex;
    flex-flow: column nowrap;
    justify-content: top;
    align-items: center;
`;
import styled from "styled-components";
const media = {desktop: '@media(min-width:1000px)'}

export const TitleWrap = styled.div`
    color: white;
    

    h1 {
        text-shadow: 1px 1px black;
        text-align: center; 
        margin: auto;
    }

    ${media.desktop}{
        margin-left: auto%;
        text-align: left;
        font-size: 2em;
    }
`;
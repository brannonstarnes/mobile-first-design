import styled from "styled-components";
const media = {desktop: '@media(min-width:1000px)'}

export const ContentWrap = styled.div`
width: 90vw;
padding: 0px 14px;
display: flex:
flex-flow: column nowrap;
justify-content: center;
align-items: center;
font-size: 1em;
font-weight: bold;
line-height: 1.75;
background-color: rgba(0,0,0,.2);


p {
    max-width: 90%;
    margin: auto;
    color: #fff;
    text-shadow: 1px 1px black;

    ${media.desktop}{
        font-size: 1.5em;

    }
}
`;
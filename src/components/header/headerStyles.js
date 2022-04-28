import styled from "styled-components";

const media = {desktop: '@media(min-width:1000px)'}


export const HeaderWrap = styled.div`
width: 95%;
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;


${media.desktop}{
    width: 1000px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: left;
    }
}
`;

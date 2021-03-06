import styled from "styled-components";
const media = {desktop: '@media(min-width:1000px)'}

export const UserPicWrap = styled.div`
    max-width:250px;
    max-height:250px;
    padding:14px;

    ${media.desktop}{
        max-height: 300px;
        max-width: 300px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
    }

    img {
        border: 1px solid black;
        border-radius: 50%;

        ${media.desktop}{
            margin-top: 20px;
            min-height: 300px;
            min-width: 300px;
        }
    }
`;
import styled from 'styled-components';
const media = {desktop: '@media(min-width:1000px)'}


export const CardsWrap = styled.div`
    display: flex;
    max-width: 95vw;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 14px;
    border: 1px solid yellow;
    
    .card{
        border: 1px solid red;
        margin: auto;
        padding: 14px;
        display: flex:
        justify-content: center;
        align-items: center;
        color: #fff;
        min-height: 500px;
        min-width: 300px;
        text-shadow: 1px 1px black;
        font-weight: bold;
        text-align: center;
        background: rgba(0,0,0,.2);
        
        ${media.desktop}{
            min-height: 500px;
            min-width: 350px;
            max-width: 30vw;
            padding: 14px;
        }
    }
    
    
    .cardPic{
        max-height: 350px;
        min-width: 90%;
        margin-top: 14px;

    }

    ${media.desktop}{
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        max-height:100%;
        min-width: 90%;
        max-width: 100%;
        margin: auto; 

        
    }

    
`;
import styled from 'styled-components';

export const SocialBarWrap = styled.div`
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    a.social {
        padding: 0 14px;
        
        margin: 0 1 rem;
        transition: transform 250ms;
        display: inline-block;
    } 
    
    a.github {
        color: purple;
      }
      
      a.linkedin {
        color: #4968ad;
      }
      
      a.twitter {
        color: #49a1eb;
      }
      
      a.kaggle {
        color: violet;
      }
      
      a.spotify{
        color: lime;
      }

      a.social:hover {
        transform: translateY(-3px);
      }
`;
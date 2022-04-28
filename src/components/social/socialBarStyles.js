import styled from 'styled-components';


export const SocialBarWrap = styled.div`
    padding: 14px;

    a.social {
        padding: 10px;
        margin: 0 1 rem;
        transition: transform 250ms;
        display: inline-block;
    } 
    
    a.youtube {
        color: #eb3223;
      }
      
      a.facebook {
        color: #4968ad;
      }
      
      a.twitter {
        color: #49a1eb;
      }
      
      a.instagram {
        color: black;
      }

      a.social:hover {
        transform: translateY(-3px);
      }
`;
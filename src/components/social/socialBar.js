import React from 'react';
import { SocialBarWrap } from './socialBarStyles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faKaggle,
    faTwitter,
    faSpotify
} from "@fortawesome/free-brands-svg-icons";

export default function SocialBar(){
    return (
        <SocialBarWrap>
            
            <a href="https://www.linkedin.com/in/brannonstarnes/" className="linkedin social">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            
            <a href="https://github.com/brannonstarnes/mobile-first-design" className="github social">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>

            <a href="https://www.kaggle.com/branlee" className="kaggle social">
                <FontAwesomeIcon icon={faKaggle} size="2x" />
            </a>
            
            <a href="https://twitter.com/BrannonStarnes" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>

            <a href="https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn" className="spotify social">
                <FontAwesomeIcon icon={faSpotify } size="2x" />
            </a>
                
        </SocialBarWrap>
    );
};
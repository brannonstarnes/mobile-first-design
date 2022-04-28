import React from 'react';
import { SocialBarWrap } from './socialBarStyles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function SocialBar(){
    return (
        <SocialBarWrap>
            <a href="https://www.youtube.com/c/jamesqquick" className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            
            <a href="https://www.facebook.com/learnbuildteach/" className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            
            <a href="https://www.twitter.com/jamesqquick" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            
            <a href="https://www.instagram.com/learnbuildteach" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
        </SocialBarWrap>
    );
};
import React from 'react'
import { UserPicWrap } from './userPicStyles';
import userImage from '../../media/hipDog.jpg'


export default function UserPic(){
    return(
        
        <UserPicWrap>
            <img class='userPic'
            src={userImage}
            alt='A hip dog'
            height='200px'     
            width='200px'
            />
        </UserPicWrap>
        
    );
};
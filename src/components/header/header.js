import React from 'react'
import { HeaderWrap } from './headerStyles';
import UserPic from './userPic';
import Title from './title';

export default function Header(){
    return(
        
        <HeaderWrap>
            <UserPic className='boxWrap'/>
            <Title className='boxWrap'/>
        </HeaderWrap>
        
    );
};
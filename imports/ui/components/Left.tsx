import React from 'react';
import StyledLeft from '../elements/StyledLeft';
import Header from './Header';
import Avatar from './Avatar';
import { Meteor } from 'meteor/meteor';


const icons:string[] = ['circle-notch', 'comment-alt', 'ellipsis-v'];

const Left = (props:any):JSX.Element => {
    return (
        <StyledLeft>
            <Header icons={icons} iconClass="greyIcon">
                <Avatar avatar_url ={Meteor.user().profile.picture}/>
            </Header>
        </StyledLeft>
    )
}

export default Left;

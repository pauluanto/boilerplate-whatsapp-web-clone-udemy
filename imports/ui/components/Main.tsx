import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import Left from './Left';
import Right from './Right';
import StyleMain from '../elements/StyledMain';
import { ChatsCollection } from '../../api/chats';

const Main = (props:any):JSX.Element => {
    Tracker.autorun(()=> {
        Meteor.subscribe('chats.mine');
        console.log('chats', ChatsCollection.find().fetch());
    })
    return (
        <StyleMain>
            <Left />
            <Right right/>
        </StyleMain>
    )
}

export default Main;

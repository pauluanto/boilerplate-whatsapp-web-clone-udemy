import React from 'react';

import Left from './Left';
import Right from './Right';
import StyleMain from '../elements/StyledMain';

const Main = (props:any):JSX.Element => {
    return (
        <StyleMain>
            <Left />
            <Right right/>
        </StyleMain>
    )
}

export default Main;

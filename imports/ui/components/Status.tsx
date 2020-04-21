import React from 'react';
import StyledStatus from '../elements/StyledStatus';
import StyledAvatar from '../elements/StyledAvatar';
import FontAwesome from 'react-fontawesome';

const Status = (props:any):JSX.Element => {
    return (
        <StyledStatus color={'blue'}>
            <StyledAvatar>
               <FontAwesome
                    name="bell-slash"
                    size="2x"
                    className= "icon--color"
                />
            </StyledAvatar>
            <div className="status--textContainer">
                <div className="text--big">
                    Etre Averti(e) de nouveaux messages.
                </div>
                <span className="text--small">
                    Afficher les notifications sur le bureau. >
                </span>
            </div>
        </StyledStatus>
    )
}

export default Status;

import React from 'react';
import StyledHeader from '../elements/StyledHeader';
import FontAwesome from 'React-fontawesome';

const Header = (props:any):JSX.Element => {
    const {icons, iconClass} = props;
    const renderIcons = ():JSX.Element[] => {
        return icons.map((icon:string, i:number)=> {
            return (
                <FontAwesome
                    key={1}
                    className={iconClass}
                    name={icon}/>
            )
        })
    }

    return (
        <StyledHeader>
            <div className={props.iconsWidthSmall ? 'icons-left small' : 'icons--left'}>
                {renderIcons()}
            </div>
        </StyledHeader>
    )
}

export default Header;

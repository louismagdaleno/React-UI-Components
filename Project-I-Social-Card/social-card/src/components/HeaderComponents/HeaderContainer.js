import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderImg from './HeaderImg';


const HeaderContainer = () => {
    return (
        <header>
            <HeaderImg />
            <HeaderContent />
        </header>
    );
}

export default HeaderContainer;
import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';


const HeaderContainer = () => {
    return (
        <header>
            <ImageThumbnail />
            <HeaderContent />
        </header>
    );
}

export default HeaderContainer;
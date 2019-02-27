// required
import React from 'react';

// styles
import './Header.css';

// components
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';


// compose HeaderContainer with imported components
const HeaderContainer = () => {
    return (
        <header>
            <ImageThumbnail />
            <HeaderContent />
        </header>
    );
}

// export HeaderContainer
export default HeaderContainer;
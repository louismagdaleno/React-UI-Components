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
            <ImageThumbnail src="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png" />
            <HeaderContent title="Lambda School" 
                content="Let's learn react by building simple interfaces with components.  
                Don't try to overthink it, just keep it simple and have fun.
                Once you feel comfortable using components you are well on your way
                to mastering React!"/>
        </header>
    );
}

// export HeaderContainer
export default HeaderContainer;
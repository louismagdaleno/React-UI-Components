import React from 'react';
import HeaderTitle from './HeaderTitle';
import './Header.css';

const HeaderContent = () => {
    return (
        
        <section>
            <div>
                <h1>Lambda School</h1>
                <HeaderTitle />
            </div>
            
             <p>Let's learn react by building simple interfaces with components.  
                Don't try to overthink it, just keep it simple and have fun.
                Once you feel comfortable using components you are well on your way
                to mastering React!</p>
        </section>
        
    );
}

export default HeaderContent;
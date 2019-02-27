// required
import React from 'react';

// components
import HeaderTitle from './HeaderTitle';

//styles
import './Header.css';

// compose HeaderContent
const HeaderContent = () => {
    return (
        
        <section className="headerContent">
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

// export HeaderContent
export default HeaderContent;
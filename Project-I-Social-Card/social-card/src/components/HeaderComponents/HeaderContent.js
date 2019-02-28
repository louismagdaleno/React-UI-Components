// required
import React from 'react';

// components
import HeaderTitle from './HeaderTitle';

//styles
import './Header.css';

// compose HeaderContent
const HeaderContent = (props) => {
    return (
        
        <section className="headerContent">
            <div>
                <h1>{props.title}</h1>
                <HeaderTitle datetime="@LambdaSchool - 27 feb"/>
            </div>
            
             <p>{props.content}</p>
        </section>
        
    );
}

// export HeaderContent
export default HeaderContent;
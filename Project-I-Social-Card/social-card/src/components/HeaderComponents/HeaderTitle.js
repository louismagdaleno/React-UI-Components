// required
import React from 'react';

// styles
import './Header.css';

// compose HeaderTitle
const HeaderTitle = (props) => {
    return (
        <h4>{props.datetime}</h4>
    );
}

// export HeaderTitle
export default HeaderTitle;

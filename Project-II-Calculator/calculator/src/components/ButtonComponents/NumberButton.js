import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
        <div className={props.className}>
            {props.text}
        </div>
    );

}

export default NumberButton;
import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
        <button className={props.buttonStyle} onClick={props.updateStateTotal}>
            {props.text}
        </button>
    );

}

export default NumberButton;
import React from 'react';
import './Card.css';

const CardContent = (props) => {
    return (
        <div className="cardContent">
            <h2>{props.title}</h2>
            <p>
                {props.content}
            </p>
            <a href={props.linkSrc}>{props.linkText}</a>
        </div>
    );
}

export default CardContent;

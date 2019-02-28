import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return (
        <a href="https://www.reactjs.org"><div className="cardContainer">
            <CardBanner />
            <CardContent title="Get started with React"
                content="React makes it painless to create interactive UIs. Design simple views for each state in your application." 
                linkText="React JS"
                linkSrc="https://reactjs.org/"/>
        </div></a>
        
    );
}

export default CardContainer;
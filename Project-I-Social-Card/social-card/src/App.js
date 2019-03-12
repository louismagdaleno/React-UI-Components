// dependency imports
import React from 'react';

// styling imports
import './App.css';

// component imports
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';

// compose imported components into one App component
const App = () => {
  return (
    <div className="app">
       <HeaderContainer />
       <CardContainer />
       <Footer />
    </div>
     
    
  );
};

// exporting App component
export default App;

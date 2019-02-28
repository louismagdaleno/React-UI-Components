import React from 'react';
import './App.css';

// custom components
import  ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
    
  }
  render() { 
    return (
    <div className="calculator">
      <div className="row">
        <CalculatorDisplay text="0" displayStyle="display" />
      </div>
      <div className="row">
        <ActionButton text="CLEAR" buttonStyle="action" />
        <NumberButton text="÷" buttonStyle="operator" />
      </div>
      <div className="row">
        <NumberButton text="7" buttonStyle="number"  />
        <NumberButton text="8" buttonStyle="number"  />
        <NumberButton text="9" buttonStyle="number"  />
        <NumberButton text="X" buttonStyle="operator"  />
      </div>
      <div className="row">
        <NumberButton text="4" buttonStyle="number"  />
        <NumberButton text="5" buttonStyle="number"  />
        <NumberButton text="6" buttonStyle="number"  />
        <NumberButton text="-" buttonStyle="operator"  />
      </div>
      <div className="row">
        <NumberButton text="1" buttonStyle="number"  />
        <NumberButton text="2" buttonStyle="number"  />
        <NumberButton text="3" buttonStyle="number"  />
        <NumberButton text="+" buttonStyle="operator"  />
      </div>
      <div className="row">
        <ActionButton text="0" buttonStyle="action"  />
        <NumberButton text="=" buttonStyle="operator"  />
      </div>
    </div>
  )
    
  }
};

export default App;

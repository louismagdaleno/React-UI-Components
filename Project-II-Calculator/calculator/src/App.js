import React from 'react';
import './App.css';

// custom components
import  ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      operators: ['&divide;','&times;', '+', '-', '=', 'clear'],
      styles: ['display', 'action', 'operator', 'number'],
      total: '0'
    };
    
  }

  newTotal(amount) {
    this.setState({ total: amount });
  }
  twoNumbers(first, second, cb) {
    return cb(this.newTotal(first), this.newTotal(second));
  }
  multiply(first, second) {
    return this.twoNumbers(first * second)
  }

  render() { 
    return (
    <div className="calculator">
      <div className="row">
        <CalculatorDisplay text={this.state.total} displayStyle={this.state.styles[0]} />
      </div>
      <div className="row">
        <ActionButton text={this.state.operators[5]} buttonStyle={this.state.styles[1]}  onClick={() => this.newTotal(0)} />
        <NumberButton text={this.state.operators[0]} buttonStyle={this.state.styles[2]}  onClick={() => this.newTotal(0)} />
      </div>
      <div className="row">
        <NumberButton text={this.state.numbers[7]} buttonStyle={this.state.styles[3]}  onClick={() => this.newTotal(7)} />
        <NumberButton text={this.state.numbers[8]} buttonStyle={this.state.styles[3]}  onClick={() => this.newTotal(8)} />
        <NumberButton text={this.state.numbers[9]} buttonStyle={this.state.styles[3]}  onClick={() => this.newTotal(9)} />
        <NumberButton text={this.state.operators[1]} buttonStyle={this.state.styles[2]}  />
      </div>
      <div className="row">
        <NumberButton text={this.state.numbers[4]} buttonStyle={this.state.styles[3]}   onClick={() => this.newTotal(4)} />
        <NumberButton text={this.state.numbers[5]} buttonStyle={this.state.styles[3]}  onClick={() => this.newTotal(5)}  />
        <NumberButton text={this.state.numbers[6]} buttonStyle={this.state.styles[3]}    onClick={() => this.newTotal(6)} />
        <NumberButton text={this.state.operators[2]} buttonStyle={this.state.styles[2]}  onClick={() => this.newTotal(0)} />
      </div>
      <div className="row">
        <NumberButton text={this.state.numbers[1]} buttonStyle={this.state.styles[3]} onClick={() => this.newTotal(1)} />
        <NumberButton text={this.state.numbers[2]} buttonStyle={this.state.styles[3]} onClick={() => this.newTotal(2)} />
        <NumberButton text={this.state.numbers[3]} buttonStyle={this.state.styles[3]} onClick={() => this.newTotal(3)} />
        <NumberButton text={this.state.operators[3]} buttonStyle={this.state.styles[2]}  />
      </div>
      <div className="row">
        <ActionButton text={this.state.numbers[0]} buttonStyle={this.state.styles[1]}  />
        <NumberButton text={this.state.operators[4]} buttonStyle={this.state.styles[2]}  />
      </div>
    </div>
  )
    
  }

  totalChangeHandler = event => {
    this.setState({total: event.target.value});
  };
};

export default App;

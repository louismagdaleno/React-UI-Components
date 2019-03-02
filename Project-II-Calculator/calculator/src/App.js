import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: '0' };
    this.total = 0;
    this.num1 = 0;
    this.num2 = 0;
  }
  
  newNumber(amount, keyPressed) {
    if (this.state.count === 0) {
      this.setState({ count: amount });
    }
    else {
      switch (keyPressed) {
        case 'number':
          if (this.state.count == '0') {
            this.setState({ count: amount });
          }
          else {
            this.setState({count: this.state.count + amount})
          }
          
          
        case '+':
          // code block
          this.num1 = parseInt(this.state.count);
          this.setState({ count: this.state.count + amount });
          break;
        case 'clr':
          // code block
          this.total = 0;
          this.num1 = 0;
          this.num2 = 0;
          this.setState({ count: 0 });
          break;
        default:
          // code block
        this.setState({ count: amount });
      }
      
    }
    
  }
  
  render() {
    return (
      <div className="calculator-wrapper">
        <CalculatorDisplay total={this.state.count} />
        <ButtonContainer className="clear-button">
          <ActionButton className="three-text" text="clear" onClick={() => this.newNumber('0', 'clr')} />
          <NumberButton bgColor="red-button" value="&divide;" onClick={() => this.newNumber('0', '/')}/>
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton bgColor="num-button" value="7" onClick={() => this.newNumber('7', 'number')} />
          <NumberButton bgColor="num-button" value="8" onClick={() => this.newNumber('8', 'number')} />
          <NumberButton bgColor="num-button" value="9" onClick={() => this.newNumber('9', 'number')} />
          <NumberButton bgColor="red-button" value="&times;" onClick={() => this.newNumber('0', '*')}/>
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton bgColor="num-button" value="4" onClick={() => this.newNumber('4', 'number')} />
          <NumberButton bgColor="num-button" value="5" onClick={() => this.newNumber('5', 'number')} />
          <NumberButton bgColor="num-button" value="6" onClick={() => this.newNumber('6', 'number')} />
          <NumberButton bgColor="red-button" value="-" onClick={() => this.newNumber('0', '-')}/>
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton bgColor="num-button" value="1" onClick={() => this.newNumber('1', 'number')} />
          <NumberButton bgColor="num-button" value="2" onClick={() => this.newNumber('2', 'number')} />
          <NumberButton bgColor="num-button" value="3" onClick={() => this.newNumber('3', 'number')} />
          <NumberButton bgColor="red-button" value="+" onClick={() => this.newNumber('0', '+')}/>
        </ButtonContainer>
        <ButtonContainer>
          <ActionButton className="three-text" text="0" onClick={() => this.newNumber('0')} />
          <NumberButton bgColor="red-button" value="=" onClick={() => this.newNumber('0', '=')}/>
        </ButtonContainer>
      </div>
    );
  }
}

export default App;

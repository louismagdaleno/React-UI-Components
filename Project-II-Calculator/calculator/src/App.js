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
    this.key = '0';
  }
  
  newNumber( keyPressed) {
    if (this.state.count == '0' &&  ['1', '2','3','4','5','6','7','8','9'].includes(keyPressed)) {
      this.setState({count:  keyPressed}) 
    } else {
      if (keyPressed == 'clear') {
        this.total = 0;
        this.setState({count: '0'});
      } else if (keyPressed == '+'){
        this.total += parseInt(this.state.count);
        this.key = keyPressed;

      } else if (keyPressed === '=') {
        this.setState({count: this.total.toString()});
        
      } else {
        if (this.key == '+') {
          this.total += parseInt(keyPressed);
          this.setState({count: this.total.toString()});
        } else {
          this.setState({count: this.state.count + keyPressed}) 
        }
         
      }
     
    }
  }
  
  render() {
    return (
      <div className="calculator-wrapper">
        <CalculatorDisplay total={this.state.count} />
        <ButtonContainer className="clear-button">
          <ActionButton className="three-text" text="clear" onClick={() => this.newNumber('clear')} />
          <NumberButton bgColor="red-button" value="&divide;" onClick={() => this.newNumber('/')}/>
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton bgColor="num-button" value="7" onClick={() => this.newNumber('7')} />
          <NumberButton bgColor="num-button" value="8" onClick={() => this.newNumber('8')} />
          <NumberButton bgColor="num-button" value="9" onClick={() => this.newNumber('9')} />
          <NumberButton bgColor="red-button" value="&times;" onClick={() => this.newNumber('*')}/>
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton bgColor="num-button" value="4" onClick={() => this.newNumber('4')} />
          <NumberButton bgColor="num-button" value="5" onClick={() => this.newNumber('5')} />
          <NumberButton bgColor="num-button" value="6" onClick={() => this.newNumber('6')} />
          <NumberButton bgColor="red-button" value="-" onClick={() => this.newNumber('-')}/>
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton bgColor="num-button" value="1" onClick={() => this.newNumber('1')} />
          <NumberButton bgColor="num-button" value="2" onClick={() => this.newNumber('2')} />
          <NumberButton bgColor="num-button" value="3" onClick={() => this.newNumber('3')} />
          <NumberButton bgColor="red-button" value="+" onClick={() => this.newNumber('+')}/>
        </ButtonContainer>
        <ButtonContainer>
          <ActionButton className="three-text" text="0" onClick={() => this.newNumber('0')} />
          <NumberButton bgColor="red-button" value="=" onClick={() => this.newNumber('=')}/>
        </ButtonContainer>
      </div>
    );
  }
}

export default App;

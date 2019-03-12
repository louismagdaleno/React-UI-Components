import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: '0', total: 0, op: 'number', rh : 0 };

  }
  
  newNumber( keyPressed) {
    if (this.state.display == '0' &&  ['1', '2','3','4','5','6','7','8','9'].includes(keyPressed)) {
      this.setState({display:  keyPressed}) 
    } else {
      if (['/', '*', '+', '-'].includes(keyPressed)) {
        this.setState({op : keyPressed});
        this.setState({total : parseFloat(this.state.display), display: "0"})
      }  else if (keyPressed == 'clear') {
        this.setState({display: '0', total: 0, rh: 0, op: 'number'});
      } else {
        if (keyPressed == '=') {
          if (this.state.op == '+') {
            this.setState({display: (parseFloat(this.state.display) + this.state.total).toString()});
          }
          else if (this.state.op == '-') {
            this.setState({display:  (this.state.total - parseFloat(this.state.display) ).toString()});
          }
          else if (this.state.op == '/') {
            this.setState({display:  (this.state.total / parseFloat(this.state.display) ).toString()});
          }
          else if (this.state.op == '*') {
            this.setState({display:  (this.state.total * parseFloat(this.state.display) ).toString()});
          }
        } else if (['0','1', '2','3','4','5','6','7','8','9'].includes(keyPressed)) {
          this.setState({display: this.state.display + keyPressed});
        }
        
      }
    
  }
}
  
  render() {
    return (
      <div className="calculator-wrapper">
        <CalculatorDisplay total={this.state.display} />
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

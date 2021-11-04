import logo from './logo.svg';
import './App.css';
import React from 'react';



class App extends React.Component {

  constructor() {
    super()
    this.evento1 = this.evento1.bind(this);
    this.evento2 = this.evento2.bind(this);
    this.evento3 = this.evento3.bind(this);
    this.state = {
      numeroDeClick: 0,
      numeroDeClick2: 0,
      numeroDeClick3: 0,
    }
  }

  evento1() {
    this.setState((anterior, _props) => ({
      numeroDeClick: anterior.numeroDeClick + 1
    }))
  }
  
  evento2() {
    this.setState((anterior, _props) => ({
      numeroDeClick2: anterior.numeroDeClick2 + 1
    }))
  }
  
  evento3() {
    this.setState((anterior, _props) => ({
      numeroDeClick3: anterior.numeroDeClick3 + 1
    }))
  }

  render() {
  return (
    <div>
      <button onClick={this.evento1}>{this.state.numeroDeClick}</button>
      <button onClick={this.evento2}>{this.state.numeroDeClick2}</button>
      <button onClick={this.evento3}>{this.state.numeroDeClick3}</button>
    </div>
  );
}
}

export default App;

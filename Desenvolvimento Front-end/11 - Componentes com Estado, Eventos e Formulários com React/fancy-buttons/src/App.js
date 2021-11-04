import logo from './logo.svg';
import './App.css';
import React from 'react';



class App extends React.Component {

  constructor() {
    super()
    this.evento1 = this.evento1.bind(this);
    this.evento2 = this.evento2.bind(this);
    this.evento3 = this.evento3.bind(this);
  }

  evento1() {
    console.log(this)
    console.log('evento 1');
  }
  
  evento2() {
    console.log('evento 2');
  }
  
  evento3() {
    console.log('evento 3');
  }

  render() {
  return (
    <div>
      <button onClick={this.evento1}>butao 1</button>
      <button onClick={this.evento2}>butao 2</button>
      <button onClick={this.evento3}>butao 3</button>
    </div>
  );
}
}

export default App;

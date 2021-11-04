import logo from './logo.svg';
import './App.css';
import React from 'react';


function evento1() {
  console.log('evento 1');
}

function evento2() {
  console.log('evento 2');
}

function evento3() {
  console.log('evento 3');
}

class App extends React.Component {

  render() {
  return (
    <div>
      <button onClick={evento1}>butao 1</button>
      <button onClick={evento2}>butao 2</button>
      <button onClick={evento3}>butao 3</button>
    </div>
  );
}
}

export default App;

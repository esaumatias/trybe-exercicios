import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="email">
          email
        <input type="email" id="email" />
        </label>
        <button type="submit">
          enviar
        </button>
      </div>
    )
  }

}

export default App;

import React from 'react';
import './App.css';
import ValidEmail from './ValidEmail';

class App extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="email">
          email
        <input type="email" id="email" />
        </label>
        <button type="submit" data-testid="id-submit" value="enviar">
          enviar
        </button>
        <ValidEmail email="test@test.com" />
      </div>
    )
  }

}

export default App;

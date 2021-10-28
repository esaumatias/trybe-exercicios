import './App.css';
import React from 'react';
import pokemons from './data';
import Pokedex from './Components/Pokedex';

class App extends React.Component {
  render() {

    return (
      <Pokedex listPokemon={pokemons} />
    )
  }
}

export default App;

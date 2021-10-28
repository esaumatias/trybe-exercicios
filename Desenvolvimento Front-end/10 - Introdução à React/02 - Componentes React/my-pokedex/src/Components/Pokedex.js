import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {

  render() {
    const { listPokemon } = this.props
    return (
      <div>
        {listPokemon.map(pokemons => <Pokemon key={pokemons.id} pokemon={pokemons}/>)}
      </div>
    );
  }
}

export default Pokedex;
import React, { useEffect, useState } from 'react';
import "./App.css";

function App() {
  const [pokemons, setPokemons ] = useState([]);
  const [limit, setLimit ] = useState(10);
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;

  useEffect(() => {
    async function fetchData() {
      const { results } = await fetch(url).then((response) => response.json());
      setPokemons(results);
    }
    fetchData();
    return () => {console.log('ola')}
  }, [limit]);

  const handleMorePokemons = () => {
    setLimit(limit + 10);
    console.log(limit);
  };

  return (
    <div className="App">
      <button type="button" onClick={handleMorePokemons}>Buscar mais pokemons</button>
      {pokemons.map((value, index) => (
        <div key={index}>
          <p>{value.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

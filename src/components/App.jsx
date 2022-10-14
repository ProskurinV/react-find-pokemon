import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import PokemonForm from './Pokemon/PokemonForm';
import PokemonInfo from './Pokemon/PokemonInfo';

export default function APP() {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <div style={{ maxWidth: 1170, margin: '0 auto', padding: 60 }}>
      <PokemonForm onSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
      <ToastContainer />
    </div>
  );
}

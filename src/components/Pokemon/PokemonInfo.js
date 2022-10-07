import { Component } from 'react';
import PokemonErrorView from './PokemonErrorView';
import PokemonDataView from './PokemonDataView';
import PokemonPendingView from './PokemonPendingView';
import PokemonApi from '../services/pokemon-api';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,

    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      this.setState({ status: 'pending' });

      PokemonApi.fetchPokemon(nextName)
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    if (status === 'idle') {
      return <div>Write Poke Name</div>;
    }
    if (status === 'pending') {
      return <PokemonPendingView pokemonName={pokemonName} />;
    }
    if (status === 'rejected') {
      return <PokemonErrorView message={error.message} />;
    }
    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} />;
    }

    // return (
    //   <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
    //     <h1>PokemonInfo</h1>
    //     {error && <h1>{error.message}</h1>}

    //     {loading && <div>Loading...</div>}
    //     {!this.props.pokemonName && <div>Write Poke Name</div>}
    //     {pokemon && (
    //       <div>
    //         <p>{this.props.pokemonName}</p>
    //         <img
    //           src={pokemon.sprites.other['official-artwork'].front_default}
    //           alt={this.props.pokemonName}
    //           width="240"
    //         />
    //       </div>
    //     )}
    //   </div>
    // );
  }
}

// this.state.pokemon.name;

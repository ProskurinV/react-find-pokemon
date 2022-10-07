import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import PokemonForm from './Pokemon/PokemonForm';
import PokemonInfo from './Pokemon/PokemonInfo';

export default class App extends Component {
  state = {
    pokemonName: '',
  };

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };
  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 60 }}>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <ToastContainer />
      </div>
    );
  }
}

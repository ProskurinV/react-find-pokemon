// export default class App extends Component {
//   state = {
//     pokemon: null,
//     loading: false,
//   };

//   componentDidMount() {
//     this.setState({ loading: true });
//     // const response = axios.get('ditto').then({ response });

//     fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//       .then(res => res.json())
//       .then(pokemon => this.setState({ pokemon }))
//       .finally(() => this.setState({ loading: false }));
//   }

//   render() {
//     const { pokemon, loading } = this.state;
//     return (
//       <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
//         {loading && <h1>loading...</h1>}
//         {pokemon && <div>{pokemon.name}</div>}
//       </div>
//     );
//   }
// }

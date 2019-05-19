import React from 'react';
import PokeList from './components/PokeList';
import dataPokemon from './data';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      all: {
        data: dataPokemon,
        fav: []
      }
    }
    this.favPokemon = this.favPokemon.bind(this);
  }

  favPokemon(event) {
    const triggerId = parseInt(event.currentTarget.id);
    this.setState((prevState, props) => {
      const newState = { ...prevState.all };
      if (!newState.fav.includes(triggerId)) {
        newState.fav.push(triggerId);
      } else {
        const index = newState.fav.indexOf(triggerId);
        newState.fav.splice(index, 1);
      }
      return { all: newState };
    });
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="title">Pokédex</h1>
        <PokeList
          state={this.state.all}
          action={this.favPokemon}
        />
      </React.Fragment>
    );
  }
}

export default App;

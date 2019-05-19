import React from 'react';
import SearchPokemon from './components/SearchPokemon';
import PokeList from './components/PokeList';
import dataPokemon from './data';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      all: {
        data: dataPokemon,
        search: null,
        fav: []
      }
    }
    this.handlePokemon = this.handlePokemon.bind(this);
    this.favPokemon = this.favPokemon.bind(this);
  }

  componentDidMount() {
    const getItem = JSON.parse(localStorage.getItem('userPokemon'));
    if (getItem !== null) {
      this.setState({
        all: getItem
      });
    }
  }

  handlePokemon(event) {
    const triggerValue = event.currentTarget.value;
    const valueLower = triggerValue.toLowerCase();
    this.setState((prevState, props) => {
      const newState = { ...prevState.all };
      newState.search = valueLower;
      return { all: newState };
    });
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
      this.saveData(newState);
      return { all: newState };
    });
  }

  saveData(obj) {
    localStorage.setItem('userPokemon', JSON.stringify(obj))
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="title">Pokédex</h1>
        <SearchPokemon
          action={this.handlePokemon}
        />
        <PokeList
          state={this.state.all}
          action={this.favPokemon}
        />
      </React.Fragment>
    );
  }
}

export default App;

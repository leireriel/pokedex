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

      newState.fav.map((item, index) => {
        if (newState.fav[index] !== triggerId) {
          newState.fav.push(triggerId);
        } else {
          newState.fav.splice(index);
        }
        return { all: newState };
      })


      // if (!newState.fav.includes(triggerId)) {
      //   newState.fav.push(triggerId);
      //   return { all: newState };
      // }

    });
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="title">Mi lista de pokemon</h1>
        <PokeList
          data={this.state.all.data}
          action={this.favPokemon}
        />
      </React.Fragment>
    );
  }
}

export default App;

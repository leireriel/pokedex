import React from 'react';
import './SearchPokemon.css';

class SearchPokemon extends React.Component {
  render() {
    const {action} = this.props;
    return (
      <form
          className="form__input"
          action="">
          <label
            htmlFor="pokemon">
            Busca por nombre o tipo de Pokemon
          </label>
          <input
            className="input__pokemon"
            type="text"
            id="pokemon"
            onChange={action}
          />
        </form>
    );
  }
}

export default SearchPokemon;
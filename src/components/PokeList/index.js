import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from '../Pokemon';
import './PokeList.css';

class PokeList extends React.Component {
  render() {
    const { data, action } = this.props;
    return (
      <ol className="list">
        {data.map((item) => {
          return (
            <li
              className="list__item"
              key={item.id}
              id={item.id - 1}
              onClick={action}>
              <Pokemon
                name={item.name}
                types={item.types}
                img={item.url}
              />
            </li>
          );
        })}
      </ol>
    );
  }
}

PokeList.propTypes = {
  dataList: PropTypes.array,
};

export default PokeList;


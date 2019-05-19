import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from '../Pokemon';
import './PokeList.css';

class PokeList extends React.Component {
  render() {
    const { data, search, fav } = this.props.state;
    const { action } = this.props;
    return (
      <ol className="list">
        {data
          .filter(item => 
            search === null ? item :
            item.name.includes(search) ? item.name : 
            null
            )
          .map((item) => {
            return (
              <li
                className={`list__item ${fav.includes(item.id - 1) && 'fav__pokemon'}`}
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


import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from '../Pokemon';

class PokeList extends React.Component {
  render() {
    return (
      <ol className="list">
        {this.props.dataList.map((item, index) => {
          return (
            <li className="list__item" key={index}>
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


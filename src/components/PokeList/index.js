import React from 'react';
import Pokemon from '../Pokemon';

class PokeList extends React.Component {
  render() {
    return (
      <ol className="list">
        {this.props.dataList.map((item, index) => {
          return (
            <li className="list__item" key={index}>
              li
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

export default PokeList;


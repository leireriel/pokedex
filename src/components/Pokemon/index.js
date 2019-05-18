import React from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css';

class Pokemon extends React.Component {
  render() {
    const {name, types, img} = this.props;
    return (
      <div className="card">
        <img className="img__pokemon" src={img} alt={name} />
        <h2 className="name__pokemon">{name}</h2>
        <ol className="list__types">
          {types.map((type, indexType) => {
            return (
              <li className="type__pokemon" key={indexType}>
              {type}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

Pokemon.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.array,
};

export default Pokemon;
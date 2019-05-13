import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    return (
      <div className="card">
        <img className="img__pokemon" src={this.props.img} alt="" />
        <h2 className="name__pokemon">{this.props.name}</h2>
        <ol className="list__types">
          {this.props.types.map((type, indexType) => {
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
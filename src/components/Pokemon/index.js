import React from 'react';

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

export default Pokemon;
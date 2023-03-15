import React, { Component } from 'react';
import './Card.css';



class Card extends Component {

  render() {
    const {imageUrl, title, contents, plink} = this.props;

    return(
      <div className="card-container">

        <div className="card-image">
          <img className="p-image" alt="project" src={imageUrl} />
        </div>

        <div className="card-title">{title}</div>

        <div className="card-contents-container">
          <div className="card-text">{contents}</div>
        </div>

        <div className="project-link">
          <a href={plink} target="_blank" rel="noreferrer">Click here to see more</a>
        </div>

      </div>
    );
  }
}

export default Card;

import React, { Component } from 'react';
import './Card.css';



class Card extends Component {

  render() {
    const {imageUrl, title, language, description, plink} = this.props;

    return(
      <div className="card-container">


        <img className="card-background" alt="project" src={imageUrl}/>


        <div className="card-contents | flow">
          <div className="card-contents-container | flow">
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{language}</p>
            <p className="card-description">{description}</p>
          </div>
          <button class="card-button">
            <a className="p-link" href={plink} target="_blank" rel="noreferrer">Click here to see more</a>
          </button>
        </div>



      </div>
    );
  }
}

export default Card;

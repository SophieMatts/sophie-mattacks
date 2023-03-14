import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  state = { clicked: false}

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }

  render() {
    return(
      <div className="card-container">
        <div className="card-image">{this.props.img}</div>
        <div className="card-title">{this.props.title}</div>
        <div className="card-contents-container">
          <div className="card-text">{this.props.contents}</div>
        </div>

        <div className="project-link">
          <a href={this.props.plink} target="_blank" rel="noreferrer">Click here to see more</a>
        </div>

      </div>
    )
  }
}

export default Card;

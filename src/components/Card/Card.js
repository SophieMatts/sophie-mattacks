import React, { Component } from 'react';
import './Card.css'

class Card extends Component {

  state = { clicked: false}

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }

  render() {
    return(

      <div className="card-container">
        <div className="card-image"></div>
        <div className="card-title">{this.props.title}</div>
        <div className="card-contents-container">
          <div className="card-text">{this.props.contents}</div>
        </div>
        <div className="project-link">{this.props.link}</div>
      </div>

    )
  }
}
export default Card;

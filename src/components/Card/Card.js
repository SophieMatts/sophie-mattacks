import React, { Component } from 'react';
import './Card.css'



class Card extends Component {

  state = { clicked: false}

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }

  render() {
    return(

      <div className="project-card">

      </div>

    )
  }
}
export default Card;

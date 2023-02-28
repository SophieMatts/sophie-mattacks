import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CVButton.css'
import { CVItem } from './CVItem';



class CVButton extends Component {

  state = { clicked: false}

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }

  render() {
    return(

      <div className="CVButton">

        <div className={this.state.clicked ? 'CVButton active' : 'CVButton'}>

          {CVItem.map((item, index) => {
            return (
              <Link className={item.cName} to={item.url}>{item.title}</Link>

            )
          })}
        </div>

      </div>
    )
  }
}
export default CVButton;

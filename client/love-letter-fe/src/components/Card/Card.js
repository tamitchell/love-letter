import React, { Component } from 'react';
import axios from 'axios'
import './Card.css'

class Card extends Component {
    constructor() {
        super()
        this.state = {
            card: []
        }
    }

    componentDidMount() {

    }

    render(){
        return(
            <div className="card">
              <div className="from">
              </div>
              <div className="to">
              </div>
              <div className="message">
              </div>
            </div>
        )
    }
}

export default Card
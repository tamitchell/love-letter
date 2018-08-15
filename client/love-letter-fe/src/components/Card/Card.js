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
        const cardId = this.props.match.
            axios.get('http://localhost:3001/')
            .then(res => {
                console.log(res.data[].)
            })
            // .then(response => this.setState({
            //     card: response.data
            // }))
            .catch(err => console.log(err))

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
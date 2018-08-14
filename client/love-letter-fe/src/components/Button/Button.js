import React, { Component } from 'react';

class Button extends Component {
    render(){
        return(
            
            <div className="btn-container">
                <button className="btn">
                <a href="/edit">Edit a Card</a>
                </button>
                <button className="btn">
                <a href="/delete">Delete a Card</a>
                </button>
            </div>
        )
    }
}

export default Button
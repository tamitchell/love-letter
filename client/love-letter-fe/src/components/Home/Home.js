import React, { Component } from "react";
import { Link } from 'react-router-dom'
import fox from '../../img/fox.png'
import './Home.scss'

class Home extends Component {
    render(){
        return(
            <div className="hero-container">
                <div className="moon"></div>
                <img src={fox} alt="fox" className="fox" />

                <Link to="/story/create"><button className="craft-story-btn">Craft Your Story</button></Link>

            </div>
        )
    }
}

export default Home
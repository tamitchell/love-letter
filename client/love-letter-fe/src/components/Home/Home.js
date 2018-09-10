import React, { Component } from "react";
import { Link } from 'react-router-dom'
import moon from '../../img/moon.png'
import fox from '../../img/fox.png'
import './Home.css'

class Home extends Component {
    render(){
        return(
            <div className="hero-container">
                <div className="moon"></div>
                {/* <img src={moon} alt="moon" className="moon" /> */}
                <img src={fox} alt="fox" className="fox" />

                <Link to="/story/create"><button className="craft-story-btn">Craft Your Story</button></Link>

            </div>
        )
    }
}

export default Home
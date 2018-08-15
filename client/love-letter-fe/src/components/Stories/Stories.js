import React, {Component} from 'react'
import axios from 'axios'
import StoryShow from '../StoryShow/StoryShow'

class Story extends Component {
    constructor(props){
        super(props)
        this.state = {
            stories: []
        }
    }
    
    componentDidMount(){
        axios.get("http://localhost:3001/story/api")
        .then(res => {
            console.log(res.data)
            this.setState({
                stories: res.data
                // stories: this.state.stories.push(res.data)
            })
        })
    }

    render(){
        let showStory = this.state.stories.map((story, i) => {
            return (
                <div key={i}>
                    <StoryShow info={story}/>
                </div>
            )
        })
        return(
        <div>
            {showStory}
            </div>
        )
        
    }
}

export default Story
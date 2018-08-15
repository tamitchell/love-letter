import React, {Component} from 'react'

class StoryShow extends Component {
    constructor(props){
        super(props)

        this.state = {
            story: this.props.info
        }
    }
    render(){
        return (
            <div>
                <p>{this.state.story.title}</p>
                <p>{this.state.story.author}</p>
                <p>{this.state.story.you}</p>
                <p>{this.state.story.need}</p>
                <p>{this.state.story.go}</p>
                <p>{this.state.story.search}</p>
                <p>{this.state.story.find}</p>
                <p>{this.state.story.take}</p>
                <p>{this.state.story.return}</p>
                <p>{this.state.story.changed}</p>
                {/* {this.props.isLoggedIn ? 
                    <div>{this.props.story.you}</div>: ''} */}
                </div>
        )
    }
}

export default StoryShow
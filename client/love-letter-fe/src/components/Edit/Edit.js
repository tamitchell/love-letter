import React, {Component} from 'react'

class Edit extends Component {
    constructor(){
        super()
        this.state={
            stories: {}
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3001/story/api')
    }
    render(){
        return(
            <div>
                </div>
        )
    }
}

export default Edit
import React, {Component} from 'react'

class Form extends Component {
    render(){
        return (
            <div className="card">
            <form action="/" method="post">
            <div className="">
            <label for="from">From</label>
              <input type="text" id="from" name="from" placeholder="from"/>
              </div>
              <div className="">
              <label for="to">To</label>
              <input type="text" id="to" name="to" placeholder="to"/>
              </div>

              <div className="">
              <label for="message">Message</label>
              <textarea id="message" name="message" placeholder="Drop yo boo a love line" maxLength="400"></textarea>
              </div>
              <input type="submit" value="sendcard"/>
            </form>
          </div>
        )
    }
}

export default Form
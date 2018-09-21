import React from "react";
import {Link} from 'react-router-dom'
import {Row, Col} from 'react-materialize';


export default function StoriesList (props) {
  let story
  if (props.stories != null || undefined) {
    story =  props.stories.map((story, i) => {
      return (
        <Row key={i}>
          <h1>{story.title}</h1>
          <p>{story.key}</p>
          <p>{story.author}</p>
          <p>{story.tagline}</p>
          <p>{story.summary}</p>
          <p>{story.you}</p>

          <Link to={{ 
            pathname: `/story/${story.key}/view`, 
            myCustomProps: {story}}}>
          <form>
            <button type="button">Read More</button>
          </form>
        </Link>
        </Row>
      );
    });
  } else {
      story = <div className="container">No results found</div>
  }
  return(
    <div>
      <h1>Story Show Page</h1>
      {story}
    </div>
  )
}

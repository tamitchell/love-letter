import React from "react";
import {Link} from 'react-router-dom'
import {Row, Col} from 'react-materialize';


export default function StoriesList (props) {
  let story
  if (props.stories != null || undefined) {
    story =  props.stories.map((story, i) => {
      return (
        <Row key={i} className="storylist-item">
          <Col className="img-box" s={12} m={5} l={3}>
          <img src={story.imgpath} alt="story-img"/>
          </Col>
          <Col
           s={12} m={7} l={9} 
          className="text-box">
          <h6>{story.title}</h6>
          <p>by {story.author}</p>
          <p>{story.summary}</p>
          <Link to={{ 
            pathname: `/story/${story.key}/view`, 
            myCustomProps: {story},
            storyKey: story.key}}>
            <button type="button">Read More</button>
        </Link>
            <p>Genre: {story.genre} | Rating: {story.rating} | Language: {story.language} </p>
          </Col>
        </Row>
      );
    });
  } else {
      story = <div className="container">No results found</div>
  }
  return(
    <Row className="storylist-component" >
      <Col s={12} m={8} l={9}><h5>Stories</h5>
   
      <Col s={12} m={12} l={12}>{story}</Col>
      </Col>
      
      <Col s={12} m={4} l={3}><h5>Last Updated</h5></Col>
    </Row>
  )
}

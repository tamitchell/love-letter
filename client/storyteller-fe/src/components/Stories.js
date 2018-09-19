import React from "react";

function ShowStory(props) {
  // console.log(props.stories)
  // let story = props.stories.map((storyObj, i) => {
  //   <div key={i}>
  //       <h1>{storyObj.title}</h1>
  //   </div>

  // })
  return(
    <div>
      <h1>Story Show Page</h1>
      {/* {story} */}
    </div>
  )
}

export default function Stories (props) {
  return (
    <ShowStory stories={props} />
  )
}

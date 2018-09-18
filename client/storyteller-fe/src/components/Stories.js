import React from "react";

function ShowStory(props) {
  console.log(props)
  return(
    <div>
      <h1>Story Show Page</h1>
    </div>
  )
}

export default function Stories (props) {
  console.log(props)
  return (
    <ShowStory {...props} />
  )
}

import React from "react";
import { Link } from 'react-router-dom'

export default function StoryShow({
  story: {id, title, author, tagline, summary} = {}
}) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{tagline}</h2>
      <h3>{author}</h3>
      <p>{summary}</p>
      <Link to={'/story/' + id}>Read More</Link>

    </div>
  )
}
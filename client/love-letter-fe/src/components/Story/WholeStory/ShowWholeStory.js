import React from 'react'

export default function ShowWholeStory ({
    story: {id, title, author, tagline, summary, rating, you, need, go, search, find, take, returned, changed } = {}
}) {
    
        return (
          <div>
            <h1>{title}</h1>
            <h2>{tagline}</h2>
            <h4>{rating}</h4>
            <h3>{author}</h3>
            <p>{summary}</p>
            <p>{you}</p>
            <p>{need}</p>
            <p>{go}</p>
            <p>{search}</p>
            <p>{find}</p>
            <p>{take}</p>
            <p>{returned}</p>
            <p>{changed}</p>      
          </div>
        )
}
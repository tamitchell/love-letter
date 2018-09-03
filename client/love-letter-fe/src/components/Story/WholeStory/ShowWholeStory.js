import React from "react";
import {Link} from 'react-router-dom'
import { Query } from 'react-apollo';
import gql from 'graphql-tag'

function ShowIndividualStoryAll ({
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
            <Link to={id + "/edit"}>Edit</Link>    
          </div>
        )
}

function IndividualStory ({stories, getStoriesQuery}) {
    return(
        <div>
            <div className="stories_header">
            <h2>All Stories</h2>
            </div>
            <div className="stories-container">
           {stories.map(story => (
               <ShowIndividualStoryAll key={story.id} story={story} getStoriesQuery={getStoriesQuery}/>
           ))}
            </div>
        </div>
    )
}



const getStories = gql`
    query getStories {
        stories {
            id
            title
            author
            tagline
            summary
            rating
            you
            need
            go
            search
            find
            take
            returned
            changed
        }
    }
`

export default function ShowIndividualStoryHOC(props) {
    return(
        <Query query={getStories}>
        {({data}) => (
            <IndividualStory {...props} getStoriesQuery={getStories}
            stories={(data && data.stories) || []}
            />
        )}
        </Query>
    )
}
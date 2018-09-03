import React from "react";
import StoryShow from "../StoryShow/StoryShow";
import { Query } from 'react-apollo';
import gql from 'graphql-tag'

function Stories({stories, getStoriesQuery}) {
    return(
        <div>
            <div className="stories_header">
            <h2>All Stories</h2>
            </div>
            <div className="stories-container">
           {stories.map(story => (
               <div>
               <StoryShow key={story.id} story={story} getStoriesQuery={getStoriesQuery}/>
               </div>
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

export default function StoriesHOC(props) {
    return(
        <Query query={getStories}>
        {({data}) => (
            <Stories {...props} getStoriesQuery={getStories}
            stories={(data && data.stories) || []}
            />
        )}
        </Query>
    )
}
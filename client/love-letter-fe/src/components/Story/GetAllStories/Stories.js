import React from "react";
import StoryShow from "../StoryShow/StoryShow";
import { Query, Fetching, Error } from "react-apollo";
import { getStories } from "../../Queries/Queries";

function Stories({ stories, getStoriesQuery }) {
  return (
    <div>
      <div className="stories_header">
        <h2>All Stories</h2>
      </div>
      <div className="stories-container">
        {stories.map(story => (
          <StoryShow
            key={story.id}
            story={story}
            getStoriesQuery={getStoriesQuery}
          />
        ))}
      </div>
    </div>
  );
}

export default function StoriesHOC(props) {
  return (
    <Query query={getStories}>
      {({ loading, error, data }) => {
          console.log(data)
      if (error) return <Error />
      if (loading || !data) return <Fetching />

      return <Stories {...props} getStoriesQuery={getStories} stories={(data && data.stories) || []}/>
    }}
    </Query>
  );
}

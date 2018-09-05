import gql from "graphql-tag";

export const getStories = gql`
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

export const createStory = gql`
  mutation($title: String!, $author: String!) {
    create (title: $title, author: $author) {
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
export const updateStory = gql`
  mutation($id: ID!) {
    update(id: $id) {
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
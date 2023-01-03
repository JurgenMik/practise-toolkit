import React from 'react';
import { useMutation } from "@apollo/react-hooks";
import gql from 'graphql-tag';

const DELETE_post = gql`
  mutation (
      $id: ID!
    ) {
      deletePost(id: $id)
    }
`;

function Delete() {

   const [deletePost, { data, error }] = useMutation(DELETE_post);

   if (error) return <p>Error...</p>;

    console.log(data)

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                deletePost({ variables: {"id": 5 }});
            }}
        >
            <button type="submit">
                Delete Post
            </button>
        </form>
    )
}

export default Delete;